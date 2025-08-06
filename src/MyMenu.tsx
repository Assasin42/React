import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu, Modal, theme, Form,Breadcrumb } from 'antd';
import MyMiniForm from './MyMiniform';
import Kartlar from './Kartlar';
import axios from 'axios';
import MyList from './Listeler';
import VerticalMenu from './VerticalMenu';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export interface IKart {
  type: string;
  projectGoal: string;
  projectName: string;
  taskType?: "xs" | "sm" | "md" | "lg";
}

const { Header, Content, Sider, Footer } = Layout;
const labels = ['Board', 'Projects','Backlog'];

;


const MyMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kartlar, setKartlar] = useState<IKart[]>([]);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [filterType, setFilterType] = useState<string>('görev');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    fetchKartlar();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 const handleTabChange = (e:any) => {
  //Number.parseInt(e.key)
  
    setSelectedTab(e.key); 
    if (e.key === "2") {
    setFilterType("proje");  // Projects'e tıklanınca sadece proje gözüksün
  } else {
    setFilterType("görev");     // Diğer durumlarda hepsi görünsün
  }
  };

  const fetchKartlar = async () => {
    const response = await fetch('http://localhost:3001/api/deneme');

    const data = await response.json();
    setKartlar(data);

  };

  const veriGonder = (formData: any) => {
    // const formData = form.getFieldsValue();
    axios.post("http://localhost:3001/api/deneme", formData)
      .then((res) => {
        fetchKartlar();
        console.log("Başarılı:", res.data);
        alert("Veri gönderildi!");
      })
      .catch(err => {
        console.error("Hata:", err);
        alert("Gönderme başarısız!");
      });
  };
  const items = labels.map((label, index) => ({
    key: index + 1,
    label:label
      
  }));

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '110px', height: '35px', marginRight: '16px' }}
        />
        
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={handleTabChange}
        />
      
        <Button onClick={handleOpenModal} type='primary' style={{ marginLeft: 10 }}>Create</Button>
      </Header>  
      <Layout>
       <Sider width={55} style={{ background: '#fff' }} >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ width: '55px', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}> 
          </Menu.Item>
        </Menu>
      </Sider>          
            
         
         <Layout >
      <Content style={{ padding: '0 10px' }}>
        <Content style={{ padding: '40px 4px 0px 4px' }}>
          <div
            style={{
              background: '#fff',
              minHeight: 480,
              padding: 24,
              borderRadius: 5,
            }}
          >    
            { selectedTab == 1 ? <Kartlar data={kartlar} filterType={filterType} /> : selectedTab == 2 ? <MyList data={kartlar} filterType={filterType} /> : null }
           
          </div>
        </Content>

      </Content>
      </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Ziraat Teknoloji ©{new Date().getFullYear()} Ziraat Bankası tarafından geliştirildi
      </Footer>

      <Modal
        title="Yeni Kayıt Oluştur"
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <MyMiniForm veriGonder={veriGonder} />
        
      </Modal>
    
    </Layout>
  );
};

export default MyMenu;
