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
