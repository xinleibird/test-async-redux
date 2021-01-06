export const user = (
  state = {
    assessmentList: {},
    userList: {},
    contractList: {},
    departmentList: {},
    positionList: {},
    projectList: {},
    punchTheClockList: {},
    purchaseList: {},
    quitList: {},
    scrapAndRepairList: {},
    staffAndProjectList: {},
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_PUNCHTHECLOOK_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchTheClockList: { ...action.result },
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: { ...action.result },
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: { ...action.result },
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_SCRAPANDREPAIR_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: { ...action.result },
        staffAndProjectList: state.staffAndProjectList,
        staffList: state.staffList,
      };
    }
    case 'CHECK_STAFFANDPROJECT_LIST': {
      return {
        assessmentList: state.assessmentList,
        userList: state.userList,
        contractList: state.contractList,
        departmentList: state.departmentList,
        positionList: state.positionList,
        projectList: state.projectList,
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: { ...action.staffAndProjectList },
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
        punchTheClockList: state.punchTheClockList,
        purchaseList: state.purchaseList,
        quitList: state.quitList,
        scrapAndRepairList: state.scrapAndRepairList,
        staffAndProjectList: state.staffAndProjectList,
        staffList: { ...action.result },
      };
    }

    default:
      return state;
  }
};
