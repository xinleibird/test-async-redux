import { fetchPostLogin } from '../utils';

export const checkUserState = (userState) => {
  return {
    type: 'CHECK_USER_STATE',
    userState,
  };
};

export const queryUserLogin = (data) => {
  return fetchPostLogin('/login', data, (dispatch, json) => {
    dispatch(checkUserState(json));
  });
};

export const setUserLoginState = (isLogin) => {
  return {
    type: 'SET_USER_LOGIN_STATE',
    isLogin,
  };
};
