export const admin = (
  state = { updateStaff: [], updateQuit: [], staffListInfo: [] },
  action
) => {
  switch (action.type) {
    case 'UPDATESTAFF': {
      return {
        updateStaff: { ...action.result },
        updateQuit: state.updateQuit,
        staffListInfo: state.staffListInfo,
      };
    }
    case 'UPDATEQUIT': {
      return {
        updateStaff: state.updateStaff,
        updateQuit: { ...action.updateQuit },
        staffListInfo: state.staffListInfo,
      };
    }
    case 'STAFFLISTINFO': {
      return {
        updateStaff: state.updateStaff,
        updateQuit: state.updateQuit,
        staffListInfo: { ...action.updateQuit },
      };
    }

    default:
      return state;
  }
};
