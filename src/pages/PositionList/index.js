import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryPositionList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '部门',
    dataIndex: 'department_id',
  },
  {
    title: '职位',
    dataIndex: 'job_title',
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

const PositionList = () => {
  const positionList = useSelector(({ user }) => {
    return user.positionList;
  });

  const { data } = positionList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryPositionList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default PositionList;
