const initLoginState = () => {
  const authenticated = localStorage.getItem('authenticated') || false;
  const token = localStorage.getItem('token') || '';

  return { authenticated, token };
};

const setLoginStateToEmpty = () => {
  localStorage.clear();
  const authenticated = false;
  const token = '';

  return { authenticated, token };
};

const setLoginStateToLocalStorage = (state) => {
  localStorage.clear();

  const { authenticated, token } = state;
  localStorage.setItem('authenticated', authenticated);
  localStorage.setItem('token', token);
};

export const login = (state = initLoginState(), action) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { loginState } = action;
      if (loginState?.token) {
        const { token } = loginState;

        setLoginStateToLocalStorage({ authenticated: token ? true : false, token });
        return { ...state, authenticated: token ? true : false };
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
