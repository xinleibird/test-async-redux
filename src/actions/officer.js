export const saveOfficerList = (list) => {
  return {
    type: 'SAVE_OFFICER_LIST',
    list,
  };
};

export const queryOfficerList = () => {
  return async (dispatch) => {
    const response = await fetch('http://rap2api.taobao.org/app/mock/273946/officers', {
      method: 'POST',
    });
    const json = await response.json();

    dispatch(saveOfficerList(json));
  };
};
