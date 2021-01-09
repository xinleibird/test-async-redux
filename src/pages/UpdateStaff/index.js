import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { queryStaffListInfo } from '../../actions/admin';
import { Form, Input, Button, Space } from 'antd';
import { queryUpdateStaff } from '../../actions/admin';

const UpdateStaff = () => {
  const { staff_name } = useParams();
  const dispatch = useDispatch();

  const staffListInfo = useSelector(({ admin }) => {
    return admin.staffListInfo;
  });

  console.log(staffListInfo);
  useEffect(() => {
    if (staff_name) {
      dispatch(queryStaffListInfo(staff_name));
    }
  }, [dispatch, staff_name]);

  const [isdisabled, setIsdisabled] = useState(true);
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <>
      <Form
        {...layout}
        onFinish={(value) => {
          dispatch(queryUpdateStaff(value));
        }}
      >
        <Form.Item label="员工Id">
          <Input
            name="id"
            defaultValue={staffListInfo?.data?.list?.[0]?.id + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="员工名字">
          <Input
            name="staff_name"
            defaultValue={staffListInfo?.data?.list?.[0]?.staff_name + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="性别">
          <Input
            name="sex"
            defaultValue={staffListInfo?.data?.list?.[0]?.sex + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="身份证号码">
          <Input
            name="id_number"
            defaultValue={staffListInfo?.data?.list?.[0]?.id_number + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        {/*  <Form.Item label="部门">
          <Input
            name="department_name"
            defaultValue={staffList?.data?.list?.[0]?.department_name + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="职位">
          <Input
            name="job_title"
            defaultValue={staffList?.data?.list?.[0]?.job_title + ''}
            disabled={isdisabled}
          />
        </Form.Item>

        <Form.Item label="住址">
          <Input
            name="address"
            defaultValue={staffList?.data?.list?.[0]?.address + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="银行卡号">
          <Input
            name="bank_card_number"
            defaultValue={staffList?.data?.list?.[0]?.bank_card_number + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="联系方式">
          <Input
            name="contact_information"
            defaultValue={staffList?.data?.list?.[0]?.contact_information + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="出生日期">
          <Input
            name="date_of_birth"
            defaultValue={staffList?.data?.list?.[0]?.date_of_birth + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="邮箱">
          <Input
            name="email"
            defaultValue={staffList?.data?.list?.[0]?.email + ''}
            disabled={isdisabled}
          />
        </Form.Item>
        <Form.Item label="入职时间">
          <Input
            name="entry_time"
            defaultValue={staffList?.data?.list?.[0]?.entry_time + ''}
            disabled={isdisabled}
          />
        </Form.Item> */}
        <Form.Item {...tailLayout}>
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                setIsdisabled(!isdisabled);
              }}
            >
              修改
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateStaff;
