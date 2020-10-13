// all functions for communicating with server/
import Axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL;

export const sendUserOtp = async (user) => {
  const url = `${apiUrl}/sendUserOtp`;
  const res = await Axios.post(url, { user });
  return res;
};

export const login = async () => {};

export const getNotesFromServer = async (subjectCode) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ success: true, notes: [1, 2, subjectCode], papers: [1, 2, 3] });
    }, 5000),
  );
};

export const getItemsFromServer = async (searchItem, checkedItems) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ success: true, items: [searchItem, checkedItems] });
    }, 2000),
  );
};
