export const admin = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_ADDASSESSMENT': {
      return { ...state };
    }

    default:
      return state;
  }
};
