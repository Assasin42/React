import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Space, Tag } from 'antd';
import { IKart, StatusId } from './MyMenu';
import { fetchKartlar, fetchTodo, fetchInProcess, fetchInreviev, fetchDone } from './Api';




const Kartlar: React.FC<any> = () => {
  // ...use onFetch as needed...
  
  const [todoCards, setTodoCards] = useState<IKart[]>([]);
  const [Inprocess, setInProcess] = useState<IKart[]>([]);
  const [Inreview, setInreview] = useState<IKart[]>([]);
  const [Done, setDone] = useState<IKart[]>([]);
  useEffect(() => {
    fetchTodo().then((data) => {
      setTodoCards(data);
    });
    fetchInProcess().then((data) => {
      setInProcess(data);
    });
    fetchInreviev().then((data) => {
      setInreview(data);
    });
    fetchDone().then((data) => {
      setDone(data);
    });
  }, [])
  return (
    <>
      <h3 className='h3'>Talepler</h3>
      <hr />
      <Row gutter={16} >
        <Col span={6}>
          <h3 className='h3'>To Do</h3>
          <div className='space-style'>
            <Space direction="vertical" size="middle" >
              {todoCards.map((kart, index) => (
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
                        if (tag === 'Finans') {
                          color = 'green';
                        }
                        if (tag === 'Ziraat Teknoloji') {
                          color = 'blue';
                        }
                        if (tag === 'Yazılım') {
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
          </div>
        </Col>


        <Col span={6} >
          <h3 className='h3'>Inprocess</h3>
          <div className="space-style">
            <Space direction="vertical" size="middle" >
              {Inprocess.map((kart, index) => (
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
                        if (tag === 'Finans') {
                          color = 'green';
                        }
                        if (tag === 'Ziraat Teknoloji') {
                          color = 'blue';
                        }
                        if (tag === 'Yazılım') {
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
          </div>
        </Col>


        <Col span={6}>
          <h3 className='h3'>İnreview</h3>
          <div className="space-style">
            <Space direction="vertical" size="middle" >
              {Inreview.map((kart, index) => (
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
                        if (tag === 'Finans') {
                          color = 'green';
                        }
                        if (tag === 'Ziraat Teknoloji') {
                          color = 'blue';
                        }
                        if (tag === 'Yazılım') {
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
          </div>
        </Col>

        <Col span={6}>
          <h3 className='h3' >Done</h3>
          <div className="space-style">
            <Space direction="vertical" size="middle" >
              {Done.map((kart, index) => (
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
                        if (tag === 'Finans') {
                          color = 'green';
                        }
                        if (tag === 'Ziraat Teknoloji') {
                          color = 'blue';
                        }
                        if (tag === 'Yazılım') {
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
          </div>
        </Col>

      </Row>
    </>
  );
};

export default Kartlar