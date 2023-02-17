import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Typography, List, Col, Row, Image, Divider, Button,
} from 'antd';
// import axios from 'axios';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import useUserActions from '../../../_actions/user.actions';

const { Content } = Layout;
const { Title } = Typography;

export default function CommentsList({ articleId, comments }) {
  const userActions = useUserActions();

  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Title>Recent comments</Title>
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
        dataSource={comments}
        // eslint-disable-next-line no-unused-vars
        renderItem={(item, idx) => (
          <List.Item>
            <Row
              style={{ width: '100%' }}
            >
              <Col>
                <Divider orientation="left" orientationMargin={50}>
                  <Image
                    height={25}
                    width={25}
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  />
                  {`${item.userId.firstName} ${item.userId.lastName} • ${item.createdAt.substring(0, 10)}`}
                </Divider>
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
                  <Typography.Text italic>
                    {`${item.nUpvotes - item.nDownvotes} `}
                    <Divider type="vertical" />
                    <Button
                      shape="circle"
                      icon={<AiOutlineLike />}
                      onClick={() => { userActions.vote(articleId, item._id, 1); }}
                    />
                    <Divider type="vertical" />
                    <Button
                      shape="circle"
                      icon={<AiOutlineDislike />}
                      onClick={() => { userActions.vote(articleId, item._id, -1); }}
                    />
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

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  ).isRequired,
  articleId: PropTypes.string.isRequired,
};
