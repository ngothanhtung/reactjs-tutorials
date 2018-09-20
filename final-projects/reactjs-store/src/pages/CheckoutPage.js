import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAsync } from '../modules/auth/actions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;



// Ant Design
// https://ant.design/components/form/
class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        // this.props.loginAsync(values.email, values.password);
        // API POST {3 params:  
        //loggedInUser: state.authReducer.loggedInUser,
        //addedProduct: state.shoppingCartReducer.addedProduct,
        //total: state.shoppingCartReducer.total,}

        const apiUrl = 'http://localhost:9000/orders';
        const client = axios.create({
          baseURL: apiUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        client.post('/check-out', {
          customer: this.props.loggedInUser[0],
          orderDetails: this.props.addedProducts,
          orderTotal: this.props.total
        })
          .then((response) => {
            // POST OK
            alert('Completed');
          })
          .catch((error) => {
            // POST ERROR
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
        <FormItem>
          {
            getFieldDecorator('notes', {
              rules: [
                { required: true, message: 'Please input note!' }],
            })(<Input placeholder="Notes" />)
          }
        </FormItem>

        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Check out
        </Button>
      </Form>
    );
  }
}

const form = Form.create()(CheckoutPage);

const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.loggedInUser,
  addedProducts: state.shoppingCartReducer.addedProducts,
  total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(form);