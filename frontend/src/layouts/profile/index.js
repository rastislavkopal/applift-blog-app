import React, { useEffect } from 'react';
import {
  Layout, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useRecoilValue } from 'recoil';
// import useFetchWrapper from '../../_helpers/fetch_wrapper';
import authAtom from '../../_state/auth';
import UsersArtices from '../../components/profile/article';

const { Content } = Layout;
const { Title } = Typography;

export default function Profile() {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/sign-in');
  }, [auth, navigate]);

  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Title>My articles</Title>
      <UsersArtices />
    </Content>
  );
}
