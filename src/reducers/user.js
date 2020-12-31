export const user = (
  state = {
    assessmentList: {},
    userList: {},
    contractList: {},
    departmentList: {},
    positionList: {},
    projectList: {},
    punchClockList: {},
    purchaseList: {},
    quitList: {},
    repairList: {},
    sProjectList: {},
    staffList: {},
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
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
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_PUNCHCLOOK_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: { ...action.result },
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_PURCASE_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
        purchaseList: { ...action.result },
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_QUIT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
        purchaseList: state.purchaseList,
        quitList: { ...action.result },
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_REPAIR_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: { ...action.result },
        sProjectList: state.sProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_SPROJECT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: { ...action.result },
        staffList: state.staffList,
      };
    }
    // eslint-disable-next-line
    case 'CHECK_STAFF_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchClockList: state.punchClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        repairList: state.repairList,
        sProjectList: state.sProjectList,
        staffList: { ...action.result },
      };
    }

    default:
      return state;
  }
};
