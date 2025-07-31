import React, { use, useEffect, useState } from 'react';
import { Card, Col, Row ,Space } from 'antd';
import { IKart } from './MyMenu';
import './Kartlar.css';

// ...existing code...
type KartlarProps = {
  data: IKart[];
};

const Kartlar: React.FC<KartlarProps> = ({ data }) => {
  // ...use onFetch as needed...



  return (
    <>
    <h3 className='h3'>Talepler</h3>
    <hr />
      <Row gutter={16} >
        <Col span={4}>
        
        <h3 className='h3'>İlk kolon</h3>
        <Space className='space-style'  direction="vertical" size="middle" >
          {data.filter((kart) => kart.type === 'proje').map((kart, index) => (
          <Card key={index} title={kart.type} style={{ width: 180, height: 213 }}>
              <p>Proje Adı: {kart.projectName}</p>
              <p>Proje Amacı: {kart.projectGoal}</p>
            </Card>
          ))}
        </Space>
        </Col>
      
        <Col span={4}>
        <h3 className='h3'>İkinci kolon</h3>
        <Space className="space-style" direction="vertical" size="middle" >
        {data.filter((kart) => kart.type === 'görev').map((kart, index) => (
          <Card key={index} title={kart.type} style={{ width: 180, height: 213 }}>
              <p>Proje Adı: {kart.projectName}</p>
              <p>Proje Amacı: {kart.projectGoal}</p>
              
            </Card>
          ))}    
        </Space>
        </Col>
      </Row>
    </>
  );
};

export default Kartlar;
