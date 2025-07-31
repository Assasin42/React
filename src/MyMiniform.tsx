import React, { useState } from 'react';
import { Form, Input, Select ,Radio, Flex , Button} from 'antd';
import MyTag from './tags';
import axios from 'axios';


const { Option } = Select;
const MyMiniForm: React.FC<any> = (props: any) => {
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
      {type === 'görev' && (
        <>
          <Form.Item label="Görev Adı" name="projectName">
            <Input placeholder="Görev adını girin" />
          </Form.Item>

          <Form.Item label="Görev Amacı" name="projectGoal">
            <Input placeholder="Görev amacını girin" />
          </Form.Item>
          <Flex vertical gap="middle">
    <Form.Item label="Görevin Büyüklüğü" name="taskType">
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">xs</Radio.Button>
      <Radio.Button value="b">sm</Radio.Button>
      <Radio.Button value="c">md</Radio.Button>
      <Radio.Button value="d">lg</Radio.Button>
    </Radio.Group>
     <br/> 
     <br/>
    <MyTag />
    </Form.Item>
    </Flex> 
        
     
 
        </>
       
      )}
       <Button type="primary" disabled={!type} onClick={()=>props.veriGonder(form.getFieldsValue())}>
  Gönder
</Button>
    </Form>
  );
  
};

export default MyMiniForm;
