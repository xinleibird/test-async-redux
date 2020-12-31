export const user = (state = { assessmentList: {}, userList: {} }, action) => {
  switch (action.type) {
    case 'CHECK_ASSESSMENT_LIST': {
      return { assessmentList: { ...action.result }, userList: state.userList };
    }
    case 'CHECK_USER_LIST': {
      return { assessmentList: state.assessmentList, userList: { ...action.result } };
    }

    default:
      return state;
  }
};
