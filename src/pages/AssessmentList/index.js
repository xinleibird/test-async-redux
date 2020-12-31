import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryAssessmentList } from '../../actions';

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
  {
    title: '考核结果',
    dataIndex: 'assessment_results',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
  },
  {
    title: '修改人',
    dataIndex: 'update_id',
  },
  {
    title: '修改时间',
    dataIndex: 'update_time',
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

  return (
    <>
      {/* <ul>
        {data?.list?.map((item) => {
          return <li key={item.id}>{item.name_of_assessor}</li>;
        })}
      </ul> */}

      <Table columns={columns} dataSource={data?.list} rowKey="id" />
    </>
  );
};

export default AssessmentList;
