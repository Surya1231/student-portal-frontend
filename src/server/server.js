// all functions for communicating with server/
import axios from 'axios';

const API_BASE_USER_URL = 'http://localhost:8080/api/user';

export const sendUserOtp = async (user) => {
  const url = `${API_BASE_USER_URL}/register`;
  const response = await axios.post(url, user);
  console.log(response.data);
  return response.data;
};

export const verifyUserOtp = async (otpData) => {
  const url = `${API_BASE_USER_URL}/verifyOtp`;
  const response = await axios.post(url, otpData);
  console.log(response.data);
  return response.data;
};

export const userLogin = async (credentials) => {
  const url = `${API_BASE_USER_URL}/login`;
  const response = await axios.post(url, credentials);
  console.log(response.data);
  return response.data;
};

export const getNotesFromServer = async (subjectCode) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ success: true, notes: [1, 2, subjectCode], papers: [1, 2, 3] });
    }, 5000),
  );
};

const dummyData = [
  {
    name: 'Pankha',
    category: 'Electronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Cooler',
    category: 'Electronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Cool Ac',
    category: 'Electronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Ac',
    category: 'Electronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Book',
    category: 'Electronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Throne of Game',
    category: 'Books',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
  {
    name: 'Bech do sabh',
    category: 'Electoronics',
    quotedPrice: '3000',
    timeUsed: '6 months',
    image: 'https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg',
    otherDetails: 'Very good working condition........',
    postedOn: '12/10/20',
    seller: 'Dhruv Golani',
    sellerContact: '99999999',
  },
];

export const getItemsFromServer = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ success: true, data: dummyData });
    }, 2000),
  );
};
