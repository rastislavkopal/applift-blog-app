import React, { useEffect, useState } from 'react';
import {
  Layout, Typography, Divider, Row, Col, Image,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import useFetchWrapper from '../../_helpers/fetch_wrapper';
import authAtom from '../../_state/auth';

import CommentsList from '../../components/comment/list';
import CreateComment from '../../components/comment/create';

const { Content } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  const fetchWrapper = useFetchWrapper();
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [comments, setComments] = useState([]);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (!auth) navigate('/sign-in');

    async function fetchMyAPI() {
      const res = await fetchWrapper.get(`${process.env.REACT_APP_API_BASE}/v1/articles/${id}`);
      const resComments = await fetchWrapper.get(`${process.env.REACT_APP_API_BASE}/v1/articles/${id}/comments`);
      setArticle(res);
      setComments(resComments);
    }
    async function fetchPhoto() {
      const result = await axios(
        'http://shibe.online/api/cats',
      );
      setPhoto(result.data[0]);
    }

    fetchMyAPI();
    fetchPhoto();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Row>
        <Col sm={24} md={18}>
          <Title>{article?.title}</Title>
          <Row>
            <Typography.Text italic>
              {`${article?.userId?.firstName} ${article?.userId?.lastName} • ${article?.createdAt?.substring(0, 10)}`}
            </Typography.Text>
          </Row>
          <Divider />
          <Image
            height={300}
            src={photo}
            style={{
              margin: '5px',
            }}
          />
          <Row>
            <Typography.Text strong>
              {
                article?.text
              }
            </Typography.Text>
          </Row>
        </Col>
        <Col
          style={{
            padding: '5px',
          }}
        >
          <Title level={3}>Related articles...</Title>
          Article1...
        </Col>
      </Row>
      <Divider />
      <Title level={3}>{`Comments (${comments.length})`}</Title>
      <CreateComment articleId={id} comments={comments} setComments={setComments} />
      <Row>
        <CommentsList comments={comments} articleId={id} />
      </Row>
    </Content>
  );
}
