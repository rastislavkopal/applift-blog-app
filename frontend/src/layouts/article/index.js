import React, { useEffect } from 'react';
import {
  Layout, Typography,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import { useRecoilValue } from 'recoil';
import useFetchWrapper from '../../_helpers/fetch_wrapper';
import authAtom from '../../_state/auth';

const { Content } = Layout;
const { Title } = Typography;

export default function Dashboard() {
  const fetchWrapper = useFetchWrapper();
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!auth) navigate('/sign-in');

    async function fetchMyAPI() {
      const res = await fetchWrapper.get(`${process.env.REACT_APP_API_BASE}/v1/articles/${id}`);
      console.log(res);
      // serArticles(res);
    }

    fetchMyAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Title>{`Article ... ${id}`}</Title>
    </Content>
  );
}
