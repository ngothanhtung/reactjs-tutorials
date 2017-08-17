import React, {Component} from 'react';
import './style.css';

class App extends Component {
    state = {
      loading: true,
      customers: []
    }

    componentDidMount() {
        fetch('http://172.104.49.4/api/CustomerApi')
            .then(res => res.json())
            .then((data) => {
              this.setState({customers: data});
              this.setState({loading: false});
            });
    }

    render() {
      if (this.state.loading === false)
      {
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
                    </tr>
                  )}
                  </tbody>
                </table>
            </div>
        );
      }
      else {
        return(<h1>Loading ...</h1>);
      }
    }
}
export default App;
