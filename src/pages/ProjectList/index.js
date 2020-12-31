import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryProjectList } from '../../actions';

import { Table } from 'antd';

const columns = [
  {
    title: '项目名称',
    dataIndex: 'project_name',
  },
  {
    title: '项目负责人',
    dataIndex: 'project_leader',
  },
  {
    title: '项目编号',
    dataIndex: 'project_number',
  },

  {
    title: '项目开始时间',
    dataIndex: 'create_time',
    sorter: (a, b) => {
      const dateAStr = a.create_time.replace(' ', 'T');
      const dateBStr = b.create_time.replace(' ', 'T');

      return new Date(dateAStr).getTime() - new Date(dateBStr).getTime();
    },
  },
  {
    title: '项目结束时间',
    dataIndex: 'end_time',
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

const ProjectList = () => {
  const projectList = useSelector(({ user }) => {
    return user.projectList;
  });

  const { data } = projectList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryProjectList());
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default ProjectList;
