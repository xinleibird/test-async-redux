export const user = (
  state = {
    assessmentList: {},
    userList: {},
    contractList: {},
    departmentList: {},
    positionList: {},
    projectList: {},
    punchClockList: {},
  },
  action
) => {
  switch (action.type) {
    case 'CHECK_ASSESSMENT_LIST': {
      return {
        assessmentList: { ...action.result },
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_USER_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: { ...action.result },
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_CONTRACT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: { ...action.result },
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_DEPAETMENT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: { ...action.result },
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_POSITION_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: { ...action.result },
        projectList: state.projectList,
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_PROJECT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: { ...action.result },
        punchClockList: state.punchClockList,
      };
    }
    case 'CHECK_PUNCHCLOOK_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.punchClockList,
        punchClockList: { ...action.result },
      };
    }

    default:
      return state;
  }
};
