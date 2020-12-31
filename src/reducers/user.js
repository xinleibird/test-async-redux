const initLoginState = () => {
  const username = JSON.parse(localStorage.getItem('username')) || '';
  const name = JSON.parse(localStorage.getItem('name')) || '';
  const role = JSON.parse(localStorage.getItem('role')) || '';
  const authenticated = JSON.parse(localStorage.getItem('authenticated')) || false;

  return { username, name, role, authenticated };
};

const setLoginStateToLocalStorage = (state) => {
  localStorage.clear();

  const { username, name, role, authenticated } = state;
  localStorage.setItem('username', JSON.stringify(username));
  localStorage.setItem('name', JSON.stringify(name));
  localStorage.setItem('role', JSON.stringify(role));
  localStorage.setItem('authenticated', JSON.stringify(authenticated));
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

        setLoginStateToLocalStorage({ role, name, username, authenticated });
        return { ...state, role, name, username, authenticated };
      }
      return { ...state };
    }

    default:
      return state;
  }
};
