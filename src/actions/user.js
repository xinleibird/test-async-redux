import { fetchGetWithCookie } from '../utils';

const checkAssessmentList = (result) => {
  return {
    type: 'CHECK_ASSESSMENT_LIST',
    result,
  };
};

export const queryAssessmentList = () => {
  return fetchGetWithCookie('/user/assessmentList', (dispatch, json) => {
    dispatch(checkAssessmentList(json));
  });
};

const checkUserList = (result) => {
  return {
    type: 'CHECK_USER_LIST',
    result,
  };
};

export const queryUserList = () => {
  return fetchGetWithCookie('/user/userList', (dispatch, json) => {
    dispatch(checkUserList(json));
  });
};

const checkContractList = (result) => {
  return {
    type: 'CHECK_CONTRACT_LIST',
    result,
  };
};

export const queryContractList = () => {
  return fetchGetWithCookie('/user/contractList', (dispatch, json) => {
    dispatch(checkContractList(json));
  });
};

const checkDepartmentList = (result) => {
  return {
    type: 'CHECK_DEPAETMENT_LIST',
    result,
  };
};

export const queryDepartmentList = () => {
  return fetchGetWithCookie('/user/departmentList', (dispatch, json) => {
    dispatch(checkDepartmentList(json));
  });
};

const checkPositionList = (result) => {
  return {
    type: 'CHECK_POSITION_LIST',
    result,
  };
};

export const queryPositionList = () => {
  return fetchGetWithCookie('/user/positionList', (dispatch, json) => {
    dispatch(checkPositionList(json));
  });
};
