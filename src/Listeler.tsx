import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IKart } from './MyMenu';
import Item from 'antd/es/list/Item';
type ListelerProps = {
  data: IKart[];
  filterType: string | null;
};



const MyList: React.FC<ListelerProps> = (props:ListelerProps) => {
  const [data, setData] = useState<any>(props.data.filter((item :IKart )=> item.type == props.filterType));

  const handleDelete = (keyToDelete: string) => {
    const newData = data.filter((item: any) => item.key !== keyToDelete);
    setData(newData);
  };

  const columns: TableProps<any>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'type',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tip',
      dataIndex: 'projectGoal',
      key: 'tip',
    },
    {
      title: 'Amacı',
      dataIndex: 'projectName',
      key: 'amaci',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table<any> columns={columns} dataSource={data} />;
};

export default MyList;