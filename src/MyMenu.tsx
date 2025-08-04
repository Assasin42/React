import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu, Modal, theme, Form } from 'antd';
import MyMiniForm from './MyMiniform';
import Kartlar from './Kartlar';
import axios from 'axios';

export interface IKart {
  type: string;
  projectGoal: string;
  projectName: string;
  taskType?: "xs" | "sm" | "md" | "lg";
}

const { Header, Content, Footer } = Layout;
const labels = ['Board', 'Projects', 'Link', 'Create'];

const MyMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kartlar, setKartlar] = useState<IKart[]>([]);
  useEffect(() => {
    fetchKartlar();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    label:
      label === 'Create' ? (
        <Button type="primary" onClick={handleOpenModal}>
          {label}
        </Button>
      ) : label === 'Link' ? (
        <>
        <Modal >
        <MyMiniForm veriGonder={veriGonder} />
    
        
      </Modal>
          {label}
        </>
      ) : (
        label
      ),
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
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Content style={{ padding: '40px 4px 30px 4px' }}>
          <div
            style={{
              background: '#fff',
              minHeight: 480,
              padding: 24,
              borderRadius: 5,
            }}
          >
            <Kartlar data={kartlar} />
          </div>
        </Content>

      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ziraat Teknoloji ©{new Date().getFullYear()} Ziraat Bankası tarafından geliştirildi
      </Footer>

      {/* 🔽 Modal burada */}
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
