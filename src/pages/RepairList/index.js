import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryRepairList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '设备名称',
    dataIndex: 'device_name',
  },
  {
    title: '设备编码',
    dataIndex: 'equipment_number',
  },
  {
    title: '设备状态 报废或维修',
    dataIndex: 'equipment_status',
  },
  {
    title: '数量',
    dataIndex: 'number',
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
    title: '修改人',
    dataIndex: 'username',
  },
];

const RepairList = () => {
  const repairList = useSelector(({ user }) => {
    return user.repairList;
  });

  const { data } = repairList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryRepairList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default RepairList;
