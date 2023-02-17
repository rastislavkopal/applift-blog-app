import React, { useEffect, useState } from 'react';
import {
  Layout, Typography, List, Col, Row, Space, Image, Divider,
} from 'antd';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { AiOutlineDislike, AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import useFetchWrapper from '../../_helpers/fetch_wrapper';
import authAtom from '../../_state/auth';

const { Content } = Layout;
const { Title, Link } = Typography;

export default function Dashboard() {
  const fetchWrapper = useFetchWrapper();
  const [articles, serArticles] = useState([]);
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // redirect to home if already logged in
    if (!auth) {
      navigate('/sign-in');
    }
    async function fetchPhotos() {
      const result = await axios(
        'http://shibe.online/api/cats?count=10',
      );
      setPhotos(result.data);
    }
    async function fetchMyAPI() {
      const res = await fetchWrapper.get(`${process.env.REACT_APP_API_BASE}/v1/articles`);
      serArticles(res);
    }

    fetchMyAPI();
    fetchPhotos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Title>Recent articles</Title>
      <List
        size="large"
        itemLayout="vertical"
        bordered
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        // footer={(
        //   <div>
        //     <b>ant design</b>
        //     footer part
        //   </div>
        // )}
        dataSource={articles}
        // eslint-disable-next-line no-unused-vars
        renderItem={(item, idx) => (
          <List.Item
            actions={[
              <Space icon={AiOutlineDislike} text="156" key="list-vertical-star-o" />,
              <Space icon={AiOutlineLike} text="156" key="list-vertical-like-o" />,
              <Space icon={AiOutlineComment} text="2" key="list-vertical-message" />,
            ]}
          >
            <Row
              style={{ width: '100%' }}
            >
              <Col sm={20} md={8}>
                <Image
                  height={250}
                  width={250}
                  src={photos[idx]}
                />
              </Col>
              <Col sm={20} md={14}>
                <Row>
                  <Title level={2}>
                    {item.title}
                  </Title>
                </Row>
                <Row>
                  <Typography.Text italic>
                    {`${item.userId.firstName} ${item.userId.lastName} • ${item.createdAt.substring(0, 10)}`}
                  </Typography.Text>
                </Row>
                <Divider />
                <Row>
                  <Typography.Text strong>
                    {
                      `${item.text.substr(0, 255)} ...`
                    }
                  </Typography.Text>
                </Row>
                <Row
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Link href={`/articles/${item._id}`}>
                    Read whole article
                  </Link>
                  <Typography.Text italic>
                    {` • ${item.comments} comments`}
                  </Typography.Text>
                </Row>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Content>
  );
}
