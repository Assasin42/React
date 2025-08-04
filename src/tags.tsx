// MyTag.tsx
import React, { useEffect, useState } from 'react';
import { Form, Checkbox, Tag } from 'antd';
import axios from 'axios';

type Props = {
  readonly?: boolean; 
  etiketler?: string[];
};

const etiketListesi = ['Ziraat', 'Ziraat Teknoloji', 'Yazılım', 'Finans'];

const MyTag = ({ readonly = false }: Props) => {
  const [etiketler, setEtiketler] = useState<string[]>([]);

  useEffect(() => {
    if (readonly) {
      // Etiketleri backend'den al (örnek GET endpoint)
      axios.get('http://localhost:3001/api/deneme')  // ← senin backend endpoint'ine göre ayarla
        .then((res) => {
          setEtiketler(res.data); // Örn: ["React", "Vue"]
        })
        .catch((err) => {
          console.error("Etiket çekme hatası:", err);
        });
    }
  }, [readonly]);

  if (readonly) {
    return (
      <div style={{ marginTop: 12 }}>
        <h4>Seçilen Etiketler:</h4>
        {etiketler.map((etiket) => (
          <Tag color="blue" key={etiket}>
            {etiket}
          </Tag>
        ))}
      </div>
    );
  }

  // Formda seçim yapma kısmı
  return (
    <Form.Item
      label="Etiket Seç"
      name="etiketler"
      rules={[{ required: true, message: 'En az bir etiket seçin' }]}
    >
      <Checkbox.Group options={etiketListesi} />
    </Form.Item>
  );
};

export default MyTag;
