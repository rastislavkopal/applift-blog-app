import React, { useEffect, useState } from 'react';
import {
  Space, Table, Button, message,
} from 'antd';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import useUserActions from '../../../_actions/user.actions';
import authAtom from '../../../_state/auth';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'Perex',
    dataIndex: 'perex',
    key: 'perex',
  },
  {
    title: '# of comments',
    key: 'comments',
    dataIndex: 'comments',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button
          shape="circle"
          icon={<AiFillEdit />}
          onClick={() => message.warning('Not implemented... but same as article create with values from existing resource')}
        />
        <Button
          shape="circle"
          icon={<AiOutlineDelete />}
          onClick={() => message.warning('NOT implemented, just another call to DELETE on API, with confirmation..')}
        />
      </Space>
    ),
  },
];

export default function UsersArtices() {
  const auth = useRecoilValue(authAtom);
  const navigate = useNavigate();
  const userActions = useUserActions();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!auth) navigate('/sign-in');

    async function fetchMyAPI() {
      const res = await userActions.userArticles(auth.data._id);
      const newResp = res.map((it) => {
        const newIt = it;
        newIt.key = it._id;
        newIt.author = `${it.firstName} ${it.lastName}`;
        newIt.perex = `${it.text.substr(0, 55)} ...`;
        return newIt;
      });
      setArticles(newResp);
    }
    fetchMyAPI();
  }, [auth, navigate]);

  return (
    <Table columns={columns} dataSource={articles} />
  );
}
