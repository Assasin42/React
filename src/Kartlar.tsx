import React, { use, useEffect, useState } from 'react';
import { Card, Col, Row ,Space } from 'antd';
import { IKart } from './MyMenu';
import './Kartlar.css';

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
        <Col span={4}>
        
        <h3 className='h3'>İlk kolon</h3>
        <Space className='space-style'  direction="vertical" size="middle" >
          {data.filter((kart) => kart.type === 'proje').map((kart, index) => (
          <Card key={index} title={kart.type} >
              <p>Proje Adı: {kart.projectName}</p>
              <p>Proje Amacı: {kart.projectGoal}</p>
            </Card>
          ))}
        </Space>
        </Col>
        )}
        {(filterType === null || filterType === "görev") && data.some(kart => kart.type === 'görev') && (
        <Col span={4}>
        <h3 className='h3'>İkinci kolon</h3>
        <Space className="space-style" direction="vertical" size="middle" >
        {data.filter((kart) => kart.type === 'görev').map((kart, index) => (
          <Card key={index} title={kart.type} >
              <p>Görev Adı: {kart.projectName}</p>
              <p>Görev Amacı: {kart.projectGoal}</p>
              <p>Görevin Büyüklüğü: {kart.taskType ?? "Belirtilmedi"}</p>
            </Card>
          ))}    
        </Space>
        </Col>
        )}
      </Row>
    </>
  );
};

export default Kartlar;
