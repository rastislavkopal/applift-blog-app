import React, { useState, useEffect } from 'react';
import {
  Button, Form, Input, Select, message, Upload,
} from 'antd';
import { AiOutlineInbox } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import useFetchWrapper from '../../../_helpers/fetch_wrapper';
import authAtom from '../../../_state/auth';

const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function CreateArticle() {
  const fetchWrapper = useFetchWrapper();
  const [language, setLanguage] = useState('cz');
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);

  useEffect(() => {
    if (!auth) navigate('/sign-in');
  }, [auth, navigate]);

  const onFinish = (values) => {
    const mergedValues = values;
    mergedValues.language = language;
    const image = {
      name: values.image[0].name,
      buffer: values.image[0].thumbUrl,
    };
    mergedValues.image = image;

    fetchWrapper.post(`${process.env.REACT_APP_API_BASE}/v1/articles`, mergedValues)
      .then(() => message.success('Successfully added new article'))
      .catch((e) => message.error(e));
    navigate('/');
  };

  const handleChange = (value) => {
    setLanguage(value);
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      name="nest-messages"
      onFinish={onFinish}
      // validateMessages={validateMessages}
      style={{
        padding: '50px 50px',
        color: '#000000',
      }}
      className="defaultForm"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        label="Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Submit an image"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload
          name="logo"
          listType="picture"
          beforeUpload={() => false}
        >
          <Button icon={<AiOutlineInbox />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Language"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select defaultValue="cz" style={{ width: 120, color: '#000000' }} onChange={handleChange}>
          <Option value="cz">Czech</Option>
          <Option value="en">English</Option>
          <Option value="sk">Slovak</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="text"
        label="Article text"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={8} id="rawTextData" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 6, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit article
        </Button>
      </Form.Item>
    </Form>
  );
}
