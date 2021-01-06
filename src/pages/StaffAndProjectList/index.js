import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryStaffAndProjectList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '项目ID',
    dataIndex: 'project_id',
  },
  {
    title: '员工ID',
    dataIndex: 'staff_id',
  },
  {
    title: '关系表',
    dataIndex: 'id',
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
    title: '更新时间',
    dataIndex: 'update_time',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '修改人用户名',
    dataIndex: 'username',
  },
];

const StaffAndProjectList = () => {
  const staffAndProjectList = useSelector(({ user }) => {
    return user.staffAndProjectList;
  });

  const { data } = staffAndProjectList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryStaffAndProjectList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default StaffAndProjectList;
