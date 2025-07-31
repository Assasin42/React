import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';
import MyMiniForm from './MyMiniform';
const Deneme: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical"
    >
     
      

      {/* Render Props */}
      <Form.Item noStyle dependencies={['m']}>
        {() => (
          <Typography>
            <p>
              Only Update when <code>password2</code> updated:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

export default Deneme;