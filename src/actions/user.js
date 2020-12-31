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
    return dispatch(checkUserList(json));
  });
};
