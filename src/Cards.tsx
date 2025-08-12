import React, { use, useEffect, useState } from 'react';
import { Card, Col, Row, Space ,Tag } from 'antd';
import { IKart } from './MyMenu';


// ...existing code...
type KartlarProps = {
  data: IKart[];
  filterType: string | null;
};

const Kartlar: React.FC<KartlarProps> = ({ data, filterType }) => {
  // ...use onFetch as needed...



  return (
    <>
      <h3 className='h3'>Talepler</h3>
      <hr />
      <Row gutter={16} >
        {(filterType === null || filterType === "proje") && data.some(kart => kart.type === 'proje') && (
          <Col span={6}>

            <h3 className='h3'>İlk kolon</h3>
            <Space className='space-style' direction="vertical" size="middle" >
              {data.filter((kart) => kart.type === 'proje').map((kart, index) => (
                <Card key={index} title={kart.type} >
                  <p>Proje Adı: {kart.projectName}</p>
                  <p>Proje Amacı: {kart.projectGoal}</p>
                                  {kart.tags && kart.tags.length > 0 ? (
    <div>
      {kart.tags.map((tag: string, i: number) => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
         if (tag === 'Ziraat') {
        color = 'volcano';
      }
    if(tag === 'Finans')
      {
        color = 'green';
      }
    if(tag === 'Ziraat Teknoloji')
      {
        color = 'blue';
      }
    if(tag === 'Yazılım')
      {
        color = 'purple';
      }
        return (
          <Tag color={color} key={i}>
            {tag}
          </Tag>
        );
      })}
    </div>
  ) : (
    <p>Belirtilmedi</p>
  )}
                </Card>
              ))}
            </Space>
          </Col>
        )}
        {(filterType === null || filterType === "görev") && data.some(kart => kart.type === 'görev') && (
          <Col span={6}>
            <h3 className='h3'>To Do</h3>
            <Space className="space-style" direction="vertical" size="middle" >
              {data.filter((kart) => kart.type === 'görev').map((kart, index) => (
                <Card className='Card' key={index} title={kart.type} >
                  <p>Görev Adı: {kart.projectName}</p>
                  <p>Görev Amacı: {kart.projectGoal}</p>
                  <p>Görevin Büyüklüğü: {kart.taskType ?? "Belirtilmedi"}</p>

                  {kart.tags && kart.tags.length > 0 ? (
    <div>
      {kart.tags.map((tag: string, i: number) => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
         if (tag === 'Ziraat') {
        color = 'volcano';
      }
    if(tag === 'Finans')
      {
        color = 'green';
      }
    if(tag === 'Ziraat Teknoloji')
      {
        color = 'blue';
      }
    if(tag === 'Yazılım')
      {
        color = 'purple';
      }
        return (
          <Tag color={color} key={i}>
            {tag}
          </Tag>
        );
      })}
    </div>
  ) : (
    <p>Belirtilmedi</p>
  )}

                </Card>
              ))}
            </Space>
          </Col>
        )}
        {(filterType === null || filterType === "görev") && data.some(kart => kart.type === 'görev') && (
          <Col span={6} >
            <h3 className='h3'>Inproces</h3>
            <div className="space-style">
            </div>
          </Col>
        )}
        {(filterType === null || filterType === "görev") && data.some(kart => kart.type === 'görev') && (
          <Col span={6}>
            <h3 className='h3'>İnreview</h3>
            <div className="space-style">
            </div>
          </Col>
        )}
        {(filterType === null || filterType === "görev") && data.some(kart => kart.type === 'görev') && (
          <Col span={6}>
            <h3 className='h3' >Done</h3>
            <div className="space-style">
            </div>
          </Col>
        )}

      </Row>
    </>
  );
};

export default Kartlar;
