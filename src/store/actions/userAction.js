export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginAction = (user) => {
  return async (dispatch) => {
    // Authenticate user
    dispatch({ type: USER_LOGIN, payload: user });
  };
};
