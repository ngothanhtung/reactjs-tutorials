import { Button, Form, Input, InputNumber, Rate, Slider } from 'antd';
import React from 'react';

type Props = {};

export default function FormExamples({}: Props) {
  return (
    <div>
      <Form
        name='login-form'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values) => {
          console.log('onFinish', values);
        }}
      >
        <Form.Item
          label='Username'
          name='username'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'Please input valid email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Age'
          name='age'
          hasFeedback
          rules={[
            // 18-60
            {
              type: 'integer',
              min: 18,
              max: 60,
              message: 'Please input valid age!',
            },
          ]}
        >
          <InputNumber style={{ width: 80 }} />
        </Form.Item>

        <Form.Item label='Rate' name='rate'>
          <Rate allowHalf />
        </Form.Item>

        <Form.Item label='Level' name='level'>
          <Slider min={0} max={10} step={0.25} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
