import axios from 'axios';

const { REACT_APP_STRIPE_APP_KEY, REACT_APP_DEV_URL}  = process.env;
const params = {
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_APP_KEY
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await axios.get(REACT_APP_DEV_URL + url, params)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}