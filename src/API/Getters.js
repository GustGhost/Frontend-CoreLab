import axios from 'axios';
import { base_URL } from '../Constants/Base_URL';

export const getCars = (setData) => {
  axios
    .get(`${base_URL}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.result);
    })
    .catch((err) => {
      alert(err.message);
    });
};
