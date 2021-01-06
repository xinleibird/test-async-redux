import { fetchGetWithToken } from '../utils';

const checkAssessmentList = (result) => {
  return {
    type: 'CHECK_ASSESSMENT_LIST',
    result,
  };
};

export const queryAssessmentList = () => {
  return fetchGetWithToken('/user/assessmentList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/userList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/contractList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/departmentList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/positionList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/projectList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/punchClockList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/purchaseList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/quitList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/repairList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/sProjectList', (dispatch, json) => {
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
  return fetchGetWithToken('/user/staffList', (dispatch, json) => {
    dispatch(checkStaffList(json));
  });
};
