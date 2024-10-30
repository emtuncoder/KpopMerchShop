import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';


const handleButtonClick = (e) => {
};
const handleMenuClick = (e) => {
};
const items = [
  {
    label: 'Set',
    key: '1',
  },
  {
    label: 'Vol 1',
    key: '2',

  },
  {
    label: 'Vol 2',
    key: '3',
  },
  {
    label: 'Vol 3',
    key: '4',

  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const DropdownComponent = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Choose Version
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default DropdownComponent;