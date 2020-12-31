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

const checkProjectList = (result) => {
  return {
    type: 'CHECK_PROJECT_LIST',
    result,
  };
};

export const queryProjectList = () => {
  return fetchGetWithCookie('/user/projectList', (dispatch, json) => {
    dispatch(checkProjectList(json));
  });
};

const checkPunchClockList = (result) => {
  return {
    type: 'CHECK_PUNCHCLOOK_LIST',
    result,
  };
};

export const queryPunchClockList = () => {
  return fetchGetWithCookie('/user/punchClockList', (dispatch, json) => {
    dispatch(checkPunchClockList(json));
  });
};

const checkPurchaseList = (result) => {
  return {
    type: 'CHECK_PURCASE_LIST',
    result,
  };
};

export const queryPurchaseList = () => {
  return fetchGetWithCookie('/user/purchaseList', (dispatch, json) => {
    dispatch(checkPurchaseList(json));
  });
};

const checkQuitList = (result) => {
  return {
    type: 'CHECK_QUIT_LIST',
    result,
  };
};

export const queryQuitList = () => {
  return fetchGetWithCookie('/user/quitList', (dispatch, json) => {
    dispatch(checkQuitList(json));
  });
};
const checkRepairList = (result) => {
  return {
    type: 'CHECK_REPAIR_LIST',
    result,
  };
};

export const queryRepairList = () => {
  return fetchGetWithCookie('/user/repairList', (dispatch, json) => {
    dispatch(checkRepairList(json));
  });
};

const checkSProjectList = (result) => {
  return {
    type: 'CHECK_SPROJECT_LIST',
    result,
  };
};

export const querySProjectList = () => {
  return fetchGetWithCookie('/user/sProjectList', (dispatch, json) => {
    dispatch(checkSProjectList(json));
  });
};
const checkStaffList = (result) => {
  return {
    type: 'CHECK_STAFF_LIST',
    result,
  };
};

export const queryStaffList = () => {
  return fetchGetWithCookie('/user/staffList', (dispatch, json) => {
    dispatch(checkStaffList(json));
  });
};
