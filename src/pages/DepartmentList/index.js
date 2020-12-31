import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryDepartmentList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '部门名字',
    dataIndex: 'department_name',
  },
  {
    title: '部门负责人',
    dataIndex: 'department_head',
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

const DepartmentList = () => {
  const departmentList = useSelector(({ user }) => {
    return user.departmentList;
  });

  const { data } = departmentList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryDepartmentList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default DepartmentList;
