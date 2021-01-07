const initLoginState = () => {
  const authenticated = localStorage.getItem('authenticated') || false;
  const token = localStorage.getItem('token') || '';
  const username = localStorage.getItem('username') || '';
  const role = localStorage.getItem('role') || '';

  return { authenticated, token, username, role };
};

const setLoginStateToEmpty = () => {
  localStorage.clear();
  const authenticated = false;
  const token = '';
  const username = '';
  const role = '';

  return { authenticated, token, username, role };
};

const setLoginStateToLocalStorage = (state) => {
  localStorage.clear();

  const { authenticated, token, username, role } = state;
  localStorage.setItem('authenticated', authenticated);
  localStorage.setItem('token', token);
  localStorage.setItem('uesrname', username);
  localStorage.setItem('role', role);
};

export const login = (state = initLoginState(), action) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { loginState } = action;
      if (loginState?.token) {
        const { token, username, role } = loginState;

        setLoginStateToLocalStorage({
          authenticated: token ? true : false,
          token,
          username,
          role,
        });
        return { ...state, authenticated: token ? true : false, username, role };
      }
      return { ...state };
    }

    case 'SET_USER_LOGIN_STATE': {
      if (!action.isLogin) {
        return { ...setLoginStateToEmpty() };
      }
      return state;
    }

    default:
      return state;
  }
};
