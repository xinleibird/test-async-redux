import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryContractList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '合同名字',
    dataIndex: 'contract_name',
  },
  {
    title: '合同编号',
    dataIndex: 'contract_no',
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
    title: '合同开始时间',
    dataIndex: 'start_time',
  },
  {
    title: '合同结束时间',
    dataIndex: 'end_time',
  },
  {
    title: '合同类型',
    dataIndex: 'type_of_contract',
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

const ContractList = () => {
  const contractList = useSelector(({ user }) => {
    return user.contractList;
  });

  const { data } = contractList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryContractList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default ContractList;
