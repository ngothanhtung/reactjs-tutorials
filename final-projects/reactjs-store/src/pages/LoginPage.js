import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAsync } from '../modules/auth/actions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

// Ant Design
// https://ant.design/components/form/
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginAsync(values.email, values.password);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.loggedInUser && <Redirect to="/" />}
        <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
          <FormItem>
            {
              getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Your email is invalid' }],
              })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }], })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )
            }
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a href="" style={{ float: 'right' }}>Forgot password</a>
            <Button loading={this.props.loading} icon="login" type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
          </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const form = Form.create()(LoginPage);


const mapStateToProps = (state) => ({
  loggedInUser: state.authReducer.loggedInUser,
  // total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(form);

