import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryUserList } from '../../actions';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import { useParams } from 'react-router';
import { queryUserInfo } from '../../actions/user';

const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    render: (text) => {
      return <Link to={`/users/${text}`}>{text}</Link>;
    },
  },
  {
    title: '员工',
    dataIndex: 'staff_id',
  },

  {
    title: '创建时间',
    dataIndex: 'create_time',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '修改人',
    dataIndex: 'update_id',
  },
  {
    title: '修改时间',
    dataIndex: 'update_time',
    sorter: (a, b) => {
      const dateAStr = a.update_time.replace(' ', 'T');
      const dateBStr = b.update_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
];

const UserList = () => {
  const userList = useSelector(({ user }) => {
    return user.userList;
  });
  const { username } = useParams();
  const { data } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryUserList());
  }, [dispatch]);

  useEffect(() => {
    if (username) {
      dispatch(queryUserInfo(username));
    }
  }, [dispatch, username]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default UserList;
