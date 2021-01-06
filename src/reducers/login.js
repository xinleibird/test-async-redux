const initLoginState = () => {
  const authenticated = localStorage.getItem('authenticated') || false;
  const token = localStorage.getItem('token') || '';
  const username = localStorage.getItem('username') || '';

  return { authenticated, token, username };
};

const setLoginStateToEmpty = () => {
  localStorage.clear();
  const authenticated = false;
  const token = '';
  const username = '';

  return { authenticated, token, username };
};

const setLoginStateToLocalStorage = (state) => {
  localStorage.clear();

  const { authenticated, token, username } = state;
  localStorage.setItem('authenticated', authenticated);
  localStorage.setItem('token', token);
  localStorage.setItem('uesrname', username);
};

export const login = (state = initLoginState(), action) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { loginState } = action;
      if (loginState?.token) {
        const { token, username } = loginState;

        setLoginStateToLocalStorage({ authenticated: token ? true : false, token, username });
        return { ...state, authenticated: token ? true : false, username };
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
