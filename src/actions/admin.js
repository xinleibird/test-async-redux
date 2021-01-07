import { fetchPostWithToken } from '../utils';

export const checkAddAssessment = (addInfo) => {
  return {
    type: 'CHECK_ADDASSESSMENT',
    addInfo,
  };
};

export const queryAddAssessment = (data) => {
  return fetchPostWithToken('/addAssessment', data, (dispatch, json) => {
    dispatch(checkAddAssessment(json));
  });
};
