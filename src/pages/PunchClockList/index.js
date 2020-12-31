import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryPunchClockList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '部门',
    dataIndex: 'department_name',
  },
  {
    title: '职位',
    dataIndex: 'job_title',
  },

  {
    title: '签到时间',
    dataIndex: 'punch_inTime',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '签退时间',
    dataIndex: 'punch_outTime',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '迟到原因',
    dataIndex: 'remark',
  },
  {
    title: '员工名字',
    dataIndex: 'staff_name',
  },
];

const PunchClockList = () => {
  const punchClockList = useSelector(({ user }) => {
    return user.punchClockList;
  });

  const { data } = punchClockList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryPunchClockList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default PunchClockList;
