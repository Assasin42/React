import React, { useState } from 'react';
import { Form, Input, Select, Radio, Flex, Button } from 'antd';
import MyTag from './tags';
import axios from 'axios';
import { getValue } from '@testing-library/user-event/dist/utils';


const { Option } = Select;
const MyMiniForm: React.FC<any> = (props: any) => {
  const [form] = Form.useForm();
  const [type, setType] = useState<string | undefined>(undefined);
  /*****************/
  const handleTypeChange = (value: string) => {
    setType(value);
  };
  /*****************/

  const onFinish = (values: any) => {
    console.log('Form verisi:', values);
    props.veriGonder(values)
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tip" name="type">
        <Select placeholder="Bir tip seçin" onChange={handleTypeChange}>
          <Option value="proje">Proje</Option>
          <Option value="görev">Görev</Option>
        </Select>
      </Form.Item>

      {type === 'proje' && (
        <>
          <Form.Item label="Proje Adı" name="projectName">
            <Input placeholder="Proje adını girin" />
          </Form.Item>

          <Form.Item label="Proje Amacı" name="projectGoal">
            <Input placeholder="Proje amacını girin" />
          </Form.Item> 
          
          <Form.Item label="Etiketler" name="tags">
          <MyTag/>
          </Form.Item>

          <br></br>
            
        </>

      )}
      {type === 'görev' && (
        <>
          <Form.Item label="Görev Adı" name="projectName">
            <Input placeholder="Görev adını girin" />
          </Form.Item>

          <Form.Item label="Görev Amacı" name="projectGoal">
            <Input placeholder="Görev amacını girin" />
          </Form.Item>

          <Flex vertical gap="middle">
            <Form.Item label="Görevin Büyüklüğü" name="taskType" rules={[{ required: true, message: 'Bir tür seçin!' }]} >
              <Radio.Group size="large">
                <Radio.Button value="xs">xs</Radio.Button>
                <Radio.Button value="sm">sm</Radio.Button>
                <Radio.Button value="md">md</Radio.Button>
                <Radio.Button value="lg">lg</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Flex>
          <Form.Item label="Etiketler" name="tags">
          <MyTag/>
          </Form.Item>
          <br></br>
        </>

      )}
      <Form.Item>
        <Button type="primary" disabled={!type} htmlType="submit">
          Gönder
        </Button>
      </Form.Item>
    </Form>
  );

};

export default MyMiniForm;
