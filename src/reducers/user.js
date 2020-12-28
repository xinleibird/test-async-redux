export const login = (state = { role: [], username: '', name: '', expired: true }, action) => {
  switch (action.type) {
    case 'CHECK_USER_STATE': {
      const { result } = action;
      if (result.success && result.errorCode === 200) {
        const role = result.data.authorities.map((roleItem) => {
          return roleItem.authority;
        });

        const { name } = result.data;
        const { username, credentialsNonExpired } = result.data.principal;
        return { ...state, role, name, username, expired: !credentialsNonExpired };
      }
      return { ...state };
    }

    default:
      return state;
  }
};
