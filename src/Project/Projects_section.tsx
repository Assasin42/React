import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IKart } from '../MyMenu';
import { fetchProjeler } from '../Api';




const MyList: React.FC<any> = () => {
  const [projeler, setProjeler] = useState<IKart[]>([]);
  useEffect(() => {
    fetchProjeler().then((data) => {
      setProjeler(data);
    });
  }, []);
  

  const handleDelete = (keyToDelete: string) => {
    const newData = projeler.filter((item: any) => item.key !== keyToDelete);
    setProjeler(newData);
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
      dataIndex: 'projectGoal',
      key: 'tip',
    },
    {
      title: 'Amacı',
      dataIndex: 'projectName',
      key: 'amaci',
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
      title: 'Eylemler',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Güncelle {record.name}</a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table<any> columns={columns} dataSource={projeler} />;
};

export default MyList;