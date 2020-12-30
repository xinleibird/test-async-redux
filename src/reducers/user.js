export const login = (
  state = { role: [], username: '', name: '', noExpired: true, authenticated: false },
  state = { role: [], username: '', name: '', authenticated: false },
  action
) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { userState } = action;
      if (userState && userState.success && userState.errorCode === 200) {
        const role = userState.data.authorities.map((roleItem) => {
          return roleItem.authority;
        });

        const { name, authenticated } = userState.data;
        const { username } = userState.data.principal;
        return { ...state, role, name, username, authenticated };
      }
      return { ...state };
    }

    default:
      return state;
  }
};
