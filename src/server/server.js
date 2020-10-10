// all functions for communicating with server/
import Axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL;

export const sendUserOtp = async (user) => {
  const url = `${apiUrl}/sendUserOtp`;
  const res = await Axios.post(url, { user });
  return res;
};

export const login = async () => {};
