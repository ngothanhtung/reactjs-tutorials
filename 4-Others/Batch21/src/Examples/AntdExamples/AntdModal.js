import { HomeOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Modal, Space } from 'antd';
import React from 'react';

import './styles.css';

function AntdModal() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open
      </Button>
      <Modal
        // footer={null}
        title={<h1 style={{ color: 'red' }}>Hello</h1>}
        cancelText='Đóng'
        okText={
          <div>
            <Space>
              <HomeOutlined />
              Đồng ý
            </Space>
          </div>
        }
        closable={false}
        centered={true}
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          // code here ....
          alert('OK');
          setVisible(false);
        }}
      >
        <h1>Hello Modal</h1>

        <Input placeholder='Enter your name' size='middle' />
        <Divider />
        <Space>
          <Button className='my-button'>Đồng ý</Button>
        </Space>
      </Modal>
    </div>
  );
}

export default AntdModal;
