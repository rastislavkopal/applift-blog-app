import React, { useEffect } from 'react';
import {
  Button, Form, Input, Typography, message,
} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authAtom from '../../../_state/auth';
import useFetchWrapper from '../../../_helpers/fetch_wrapper';

const { Title } = Typography;

export default function CreateComment({ articleId, comments, setComments }) {
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);
  const fetchWrapper = useFetchWrapper();

  useEffect(() => {
    if (!auth) navigate('/sign-in');
  }, [auth, navigate]);

  const onFinish = (values) => {
    const res = fetchWrapper.post(`${process.env.REACT_APP_API_BASE}/v1/articles/${articleId}/comments`, values)
      .then(() => message.success('Successfully added new comment'))
      .catch((e) => message.error(e));

    setComments(_.concat(comments), [res]);
  };

  return (
    <div>
      <Title
        level={4}
        style={{
          marginLeft: '50px',
        }}
      >
        Add comment...
      </Title>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          color: '#000000',
        }}
        className="defaultForm"
      >
        <Form.Item
          name="text"
          label="text"
        >
          <Input.TextArea rows={2} id="rawTextData" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 6, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

CreateComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  ).isRequired,
  setComments: PropTypes.func.isRequired,
};
