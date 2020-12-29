import routes from '../config/routes';

export const routeList = (state = routes, action) => {
  switch (action.type) {
    case 'UPDATE_SIDEBAR_STATE': {
      break;
    }

    default:
      return state;
  }
};
