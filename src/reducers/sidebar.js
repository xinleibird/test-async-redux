import routes from '../config/routes';

const initSidebarState = (arr) => {
  return arr.map((item) => {
    if (item.routes) {
      item.routes = initSidebarState(item.routes);
      item.isSubMenu = true;
    } else {
      item.isSubMenu = false;
    }

    item.active = false;
    item.key = item.path;

    return item;
  });
};

export const sidebar = (state = routes, action) => {
  switch (action.type) {
    case 'UPDATE_SIDEBAR_STATE': {
      break;
    }

    default:
      return state;
  }
};
