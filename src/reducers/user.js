export const user = (state = { assessmentList: {} }, action) => {
  switch (action.type) {
    case 'CHECK_ASSESSMENT_LIST': {
      console.log(action.result);
      return { assessmentList: { ...action.result } };
    }

    default:
      return state;
  }
};
