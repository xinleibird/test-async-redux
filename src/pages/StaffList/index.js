import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryStaffList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '员工名字',
    dataIndex: 'staff_name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '身份证号码',
    dataIndex: 'id_number',
  },
  {
    title: '部门',
    dataIndex: 'department_name',
  },
  {
    title: '职位',
    dataIndex: 'job_title',
  },
  {
    title: '住址',
    dataIndex: 'address',
  },
  {
    title: '银行卡号',
    dataIndex: 'bank_card_number',
  },
  {
    title: '联系方式',
    dataIndex: 'contact_information',
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
    title: '出生日期',
    dataIndex: 'date_of_birth',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '入职时间',
    dataIndex: 'entry_time',
  },
  {
    title: '修改时间',
    dataIndex: 'update_time',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '修改人',
    dataIndex: 'username',
  },
];

const StaffList = () => {
  const staffList = useSelector(({ user }) => {
    return user.staffList;
  });

  const { data } = staffList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryStaffList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default StaffList;
