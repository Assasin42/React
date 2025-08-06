import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: '',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: '',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      
    ],
  },
  {
    key: 'sub4',
    label: '',
    icon: <SettingOutlined />,
    
  },
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const VerticalMenu: React.FC = () => (
  <Menu onClick={onClick} style={{ width: 70 }} mode="vertical" items={items} />
);

export default VerticalMenu;