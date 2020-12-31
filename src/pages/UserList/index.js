import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryUserList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
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

  const { data } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryUserList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default UserList;
