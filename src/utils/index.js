import { setUserLoginState } from '../actions/login';

export const fetchPostLogin = (urlParted, data, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic Og==');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams(data),
      mode: 'cors',
      // redirect: 'follow',
    });
    const json = await response.json();
    callback(dispatch, json);
  };
};

export const fetchPostWithCookie = (urlParted, data, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams(data),
      credentials: 'include',
      mode: 'cors',
    });
    const json = await response.json();
    callback(dispatch, json);
  };
};

export const fetchGetWithCookie = (urlParted, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'GET',
      // headers: myHeaders,
      credentials: 'include',
      mode: 'cors',
      // redirect: 'follow',
    });
    const json = await response.json();

    if ((json.errorCode === 2001 || json.errorCode === 2002) && json.success === false) {
      dispatch(setUserLoginState(false));
    }
    callback(dispatch, json);
  };
};
