import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

function AntdExamples() {
  return (
    <div style={{ padding: 24 }}>
      <Button type='primary' icon={<SendOutlined />}>
        Save
      </Button>
    </div>
  );
}

export default AntdExamples;
