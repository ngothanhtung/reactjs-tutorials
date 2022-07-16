import React from 'react';
import { Button, Space, Menu, Dropdown, Steps, Divider } from 'antd';
import { HomeOutlined, SendOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';

const MyMenu = () => {
  return (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );
};

function AntdExamples() {
  return (
    <Space style={{ padding: 24 }} direction='vertical'>
      <Space direction='horizontal'>
        <Button type='primary' icon={<HomeOutlined />}>
          Home
        </Button>
        <Button type='primary' icon={<SendOutlined />}>
          Save
        </Button>
        <Button type='primary' icon={<SendOutlined />}>
          Save
        </Button>
      </Space>

      <Divider />

      <Dropdown overlay={MyMenu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Divider />

      <Menu>
        <Menu.Item>item 1</Menu.Item>
        <Menu.Item>item 2</Menu.Item>
        <Menu.SubMenu title='sub menu'>
          <Menu.Item>item 3</Menu.Item>
        </Menu.SubMenu>
      </Menu>

      <Divider />

      <Steps current={2}>
        <Steps.Step title='Finished' description='This is a description.' />
        <Steps.Step title='In Progress' subTitle='Left 00:00:08' description='This is a description.' />
        <Steps.Step title='Waiting' description='This is a description.' />
      </Steps>
    </Space>
  );
}

export default AntdExamples;
