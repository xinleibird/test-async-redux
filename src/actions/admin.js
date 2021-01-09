import { fetchPostWithToken, fetchGetWithToken } from '../utils';

export const UpdateStaff = (result) => {
  return {
    type: 'UPDATESTAFF',
    result,
  };
};

export const queryUpdateStaff = (data) => {
  return fetchPostWithToken('/admin/updateStaff', data, (dispatch, json) => {
    dispatch(UpdateStaff(json));
  });
};

export const UpdateQuit = (result) => {
  return {
    type: 'UPDATEQUIT',
    result,
  };
};

export const queryUpdateQuit = (data) => {
  return fetchPostWithToken('/admin/updateQuit', data, (dispatch, json) => {
    dispatch(UpdateQuit(json));
  });
};

const StaffListInfo = (result) => {
  return {
    type: 'STAFFLISTINFO',
    result,
  };
};

export const queryStaffListInfo = (staff_name) => {
  return fetchGetWithToken('/user/staffList', { staff_name }, (dispatch, json) => {
    dispatch(StaffListInfo(json));
  });
};
