import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryPurchaseList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '合同编号',
    dataIndex: 'contract_no',
  },
  {
    title: '物资名字',
    dataIndex: 'material_name',
  },
  {
    title: '数量',
    dataIndex: 'number',
  },
  {
    title: '采购单号',
    dataIndex: 'purchase_order_number',
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
    title: '供应商',
    dataIndex: 'supplier',
  },
  {
    title: '用户名字',
    dataIndex: 'username',
  },
];

const PurchaseList = () => {
  const purchaseList = useSelector(({ user }) => {
    return user.purchaseList;
  });

  const { data } = purchaseList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryPurchaseList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default PurchaseList;
