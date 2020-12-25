export const officerList = (state = { atDoor: {}, atBuilding: {} }, action) => {
  switch (action.type) {
    case 'SAVE_OFFICER_LIST': {
      const atDoor = {};
      const atBuilding = {};

      action.list.array.forEach((item) => {
        if (item.type === '0') {
          atDoor[item.uId] = { name: item.name, type: item.type };
        } else {
          atBuilding[item.uId] = { name: item.name, type: item.type };
        }
      });

      return { atDoor: { ...atDoor }, atBuilding: { ...atBuilding } };
    }

    default:
      return state;
  }
};
