import { setUserLoginState } from '../actions/login';

export const fetchPostLogin = (urlParted, data, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    // myHeaders.append('Authorization', 'Basic Og==');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams(data),
    });
    const json = await response.json();
    callback(dispatch, json);
  };
};

export const fetchPostWithToken = (urlParted, data, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams(data),
    });
    const json = await response.json();
    callback(dispatch, json);
  };
};

export const fetchGetWithToken = (urlParted, callback) => {
  return async (dispatch) => {
    const myHeaders = new Headers();

    const token = localStorage.getItem('token');
    myHeaders.append('Authorization', `Bearer ${token}`);

    const response = await fetch(`${process.env.REACT_APP_API_URL}${urlParted}`, {
      method: 'GET',
      headers: myHeaders,
    });
    const json = await response.json();

    if ((json.errorCode === 2001 || json.errorCode === 2002) && json.success === false) {
      dispatch(setUserLoginState(false));
    }
    callback(dispatch, json);
  };
};
