import React, { useState } from 'react';
import { Form, Input, Select ,Radio, Flex , Button} from 'antd';
import MyTag from './tags';
import axios from 'axios';


const { Option } = Select;
const Projects: React.FC<any> = (props: any) => {
  const [form] = Form.useForm();
  const [type, setType] = useState<string|undefined>(undefined);
  /*****************/
  const handleTypeChange = (value: string) => {
    setType(value);
  };
  /*****************/

  
  return (
    <Form form={form} layout="vertical" onFinish={() => props.veriGonder(form.getFieldsValue())}>
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
          </Form.Item> <MyTag />
         

        </>
       
      )}
  
       <Button type="primary" disabled={!type} onClick={()=>props.veriGonder(form.getFieldsValue())}>
  Gönder
</Button>
    </Form>
  );
  
};

export default Projects;
