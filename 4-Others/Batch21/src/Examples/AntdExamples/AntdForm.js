import React from 'react';
import { Button, DatePicker, Form, Input, Switch } from 'antd';

function AntdForm() {
  return (
    <div style={{ padding: 24 }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={(values) => {
          console.log(values);
        }}
        onFinishFailed={() => {}}
      >
        <Form.Item label='Email' name='email' hasFeedback rules={[{ type: 'email', message: 'Email không hợp lệ' }]}>
          <Input />
        </Form.Item>

        <Form.Item label='Date of birth' name='dob' hasFeedback>
          <DatePicker />
        </Form.Item>

        <Form.Item
          label='Mật khẩu'
          name='password'
          hasFeedback
          rules={[
            { whitespace: true, message: 'Chưa nhập mật khẩu' },
            { required: true, message: 'Chưa nhập mật khẩu' },
            { min: 6, message: 'Mật khẩu ít nhất có 6 ký tự' },
          ]}
        >
          <Input.Password allowClear size='large' />
        </Form.Item>
        <Form.Item
          label='Xác nhận mật khẩu'
          name='confirmPassword'
          dependencies={['password']}
          hasFeedback
          rules={[
            { whitespace: true, message: 'Chưa nhập xác nhận mật khẩu' },
            { required: true, message: 'Chưa nhập xác nhận mật khẩu' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Xác nhận mật khẩu không khớp'));
              },
            }),
          ]}
        >
          <Input.Password allowClear size='large' />
        </Form.Item>

        <Form.Item label='Agree?' name='agree'>
          <Switch />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AntdForm;
