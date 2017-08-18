import React, {Component} from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       loading: true,
       customers: [],
       customer: {
         id:'',
         firstName: '',
         lastName: '',
         email: '',
         address: '',
         phoneNumber: '',
         birthday: '',
         gender: ''
       }
     }

     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
     event.preventDefault();

     var data = JSON.stringify(this.state.customer);

    var component = this;

     // url (required), options (optional)
     fetch('http://localhost:27636/api/CustomerApi/', {
     	 method: 'POST',
       body: data,
       headers: new Headers({
         'Content-Type': 'application/json'
       })
     }).then(function(response) {
     	 return response.json()
     }).then(function(data) {
       var customers = component.state.customers;
       customers.push(data);
       component.setState({ customers: customers});
     }).catch(function(err) {
     	// Error :(
      console.log(err);
     });
   }

   handleChange(field, event) {
     var object = this.state.customer;
     object[field] = event.target.value;
     this.setState({customer: object});
   }

    componentDidMount() {
        fetch('http://localhost:27636/api/CustomerApi')
            .then(res => res.json())
            .then((data) => {
              this.setState({customers: data});
              this.setState({loading: false});
            });
    }

    render() {
      if (this.state.loading === false) {
        return (
            <div className="App">
                <h1>Customers</h1>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Birthday</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.customers.map(customer =>
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phoneNumber}</td>
                      <td>{customer.address}</td>
                      <td>{customer.birthday}</td>
                      <td>{customer.gender}</td>
                    </tr>
                  )}
                  </tbody>
                </table>

                <hr />
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Id:</label>
                    <input type="text" className="input form-control" value={this.state.customer.id} onChange={this.handleChange.bind(this, 'id')} />
                  </div>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="input form-control" value={this.state.customer.firstName} onChange={this.handleChange.bind(this, 'firstName')} />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="input form-control" value={this.state.customer.lastName} onChange={this.handleChange.bind(this, 'lastName')} />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="input form-control" value={this.state.customer.email} onChange={this.handleChange.bind(this, 'email')} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" className="input form-control" value={this.state.customer.phoneNumber} onChange={this.handleChange.bind(this, 'phoneNumber')} />
                  </div>
                  <div className="form-group">
                    <label>Address:</label>
                    <input type="text" className="input form-control" value={this.state.customer.address} onChange={this.handleChange.bind(this, 'address')} />
                  </div>
                  <div className="form-group">
                    <label>Birthday:</label>
                    <input type="text" className="input form-control" value={this.state.customer.birthday} onChange={this.handleChange.bind(this, 'birthday')} />
                  </div>
                  <div className="form-group">
                    <label>Gender:</label>
                    <input type="text" className="input form-control" value={this.state.customer.gender} onChange={this.handleChange.bind(this, 'gender')} />
                  </div>
                  <div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                  </div>
                </form>
            </div>
        );
      }
      else {
        return(<h1>Loading ...</h1>);
      }
    }
}
export default App;
