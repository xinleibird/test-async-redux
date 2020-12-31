const initLoginState = () => {
  const username = JSON.parse(localStorage.getItem('username')) || '';
  const name = JSON.parse(localStorage.getItem('name')) || '';
  const role = JSON.parse(localStorage.getItem('role')) || '';
  const authenticated = JSON.parse(localStorage.getItem('authenticated')) || false;
  const remoteAddress = JSON.parse(localStorage.getItem('remoteAddress')) || '';

  return { username, name, role, authenticated, remoteAddress };
};

const setLoginStateToEmpty = () => {
  localStorage.clear();
  const username = '';
  const name = '';
  const role = '';
  const authenticated = false;
  const remoteAddress = '';

  return { username, name, role, authenticated, remoteAddress };
};

const setLoginStateToLocalStorage = (state) => {
  localStorage.clear();

  const { username, name, role, authenticated, remoteAddress } = state;
  localStorage.setItem('username', JSON.stringify(username));
  localStorage.setItem('name', JSON.stringify(name));
  localStorage.setItem('role', JSON.stringify(role));
  localStorage.setItem('authenticated', JSON.stringify(authenticated));
  localStorage.setItem('remoteAddress', JSON.stringify(remoteAddress));
};

export const login = (state = initLoginState(), action) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { userState } = action;
      if (userState && userState.success && userState.errorCode === 200) {
        const role = userState.data.authorities.map((roleItem) => {
          return roleItem.authority;
        });

        const { name, authenticated } = userState.data;
        const { username } = userState.data.principal;
        const { remoteAddress } = userState.data.details;

        setLoginStateToLocalStorage({ role, name, username, authenticated, remoteAddress });
        return { ...state, role, name, username, authenticated, remoteAddress };
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
