import React from 'react';
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
type Props = {};

export default function ButtonExamples({}: Props) {
  const [loading, setLoading] = React.useState(false);

  // Create a handler for the button click event with 2 seconds delay
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Space wrap>
      <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
      <Button type='primary' onClick={handleClick} loading={loading} disabled={loading}>
        Loading Button
      </Button>
      <Button type='primary' icon={<PoweroffOutlined />} shape='circle'></Button>
    </Space>
  );
}
