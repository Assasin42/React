import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IKart, StatusId } from '../MyMenu';
import Item from 'antd/es/list/Item';

type ListelerProps = {
  data: IKart[];
  filterType: string | null;
  status:StatusId;
};



const Mytask: React.FC<ListelerProps> = (props: ListelerProps) => {
  const [data, setData] = useState<any>(props.data);

  const handleDelete = (keyToDelete: string) => {
    const newData = data.filter((item: any) => item.key !== keyToDelete);
    setData(newData);
  };
  const columns: TableProps<any>['columns'] = [
    {
      title: 'Tür',
      dataIndex: 'type',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hedef',
      dataIndex: 'projectName',
      key: 'tip',
    },
    {
      title: 'Amacı',
      dataIndex: 'projectGoal',
      key: 'amaci',
    },
    {
      title: 'Büyüklüğü',
      dataIndex: 'taskType',
      key: 'büyüklük',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {(tags ?? []).map((tags: string) => { // ✅ null ise boş array
            let color = tags.length > 4 ? 'geekblue' : 'green';
            if (tags === 'Ziraat') {
              color = 'volcano';
            }
            if (tags === 'Finans') {
              color = 'green';
            }
            if (tags === 'Ziraat Teknoloji') {
              color = 'blue';
            }
            if (tags === 'Yazılım') {
              color = 'purple';
            }
            else {
              <p>Belirtilmedi</p>
            }

            return (
              <Tag color={color} key={tags}>
                {tags.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Güncelle {record.name}</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table<any> columns={columns} dataSource={data} />;
};

export default Mytask;