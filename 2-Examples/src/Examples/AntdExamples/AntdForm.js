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
          console.log(values.dob.toString());
        }}
        onFinishFailed={() => {}}
      >
        <Form.Item label='Email' name='email'>
          <Input />
        </Form.Item>

        <Form.Item label='Date of birth' name='dob'>
          <DatePicker />
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
