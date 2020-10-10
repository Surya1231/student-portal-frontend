export const LOCAL_USER = 'LOCAL_USER';
export const LOCAL_TOKEN = 'LOCAL_TOKEN';

// Retrive user and token from locat storage
const localUser = JSON.parse(localStorage.getItem(LOCAL_USER)) || null;
const localToken = JSON.parse(localStorage.getItem(LOCAL_TOKEN)) || null;

const initialState = {
  user: localUser,
  token: localToken,
  admin: localUser ? localUser.permission === 'admin' : false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
