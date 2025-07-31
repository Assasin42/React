import React, { use, useEffect, useState } from 'react';
import { Card, Col, Row ,Space } from 'antd';
import { IKart } from './MyMenu';




// ...existing code...
type KartlarProps = {
  data: IKart[];
};

const Kartlar: React.FC<KartlarProps> = ({ data }) => {
  // ...use onFetch as needed...



  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
        <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
          {data.map((kart, index) => (
            <Card key={index} title={kart.type}>
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
