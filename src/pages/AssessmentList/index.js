import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryAssessmentList } from '../../actions';
import { v4 as uuid } from 'uuid';

import { Table } from 'antd';

// {
//   "id": 2,
//   "name_of_assessor": "123",
//   "department": "1",
//   "position": "1",
//   "assessment_results": "1",
//   "create_time": "2020-12-15 17:16:50",
//   "update_time": "2020-12-21 15:18:35",
//   "update_id": 1
// },

// {
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
//   render: text => <a>{text}</a>,
// },

// {
// key: '1',
// name: 'John Brown',
// age: 32,
// address: 'New York No. 1 Lake Park',
// tags: ['nice', 'developer'],
// },

const columns = [
  {
    title: '考核人',
    dataIndex: 'name_of_assessor',
  },
  {
    title: '部门',
    dataIndex: 'department',
  },
  {
    title: '职位',
    dataIndex: 'position',
  },
];

const AssessmentList = () => {
  const assessmentList = useSelector(({ user }) => {
    return user.assessmentList;
  });

  const { data } = assessmentList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(queryAssessmentList());
  }, [dispatch]);

  return <Table columns={columns} dataSource={data?.list} rowKey="id" />;
};

export default AssessmentList;
