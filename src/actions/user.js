export const checkUserState = (userState) => {
  return {
    type: 'CHECK_USER_STATE',
    userState,
  };
};

export const queryUserLogin = (data) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams(data),
      mode: 'cors',
    });
    const json = await response.json();

    dispatch(checkUserState(json));
  };
};
