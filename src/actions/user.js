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

const checkPunchTheClockList = (result) => {
  return {
    type: 'CHECK_PUNCHTHECLOOK_LIST',
    result,
  };
};

export const queryPunchTheClockList = () => {
  return fetchGetWithToken('/user/punchTheClockList', (dispatch, json) => {
    dispatch(checkPunchTheClockList(json));
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
const checkScrapAndRepairList = (result) => {
  return {
    type: 'CHECK_SCRAPANDREPAIR_LIST',
    result,
  };
};

export const queryScrapAndRepairList = () => {
  return fetchGetWithToken('/user/scrapAndRepairList', (dispatch, json) => {
    dispatch(checkScrapAndRepairList(json));
  });
};

const checkStaffAndProjectList = (result) => {
  return {
    type: 'CHECK_STAFFANDPROJECT_LIST',
    result,
  };
};

export const queryStaffAndProjectList = () => {
  return fetchGetWithToken('/user/staffAndProjectList', (dispatch, json) => {
    dispatch(checkStaffAndProjectList(json));
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
