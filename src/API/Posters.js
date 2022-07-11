import axios from 'axios';
import { useEffect, useState } from 'react';
import { base_URL } from '../Constants/Base_URL';

export const useAddCars = (initialData) => {
  const [data, setData] = useState([initialData]);
  useEffect(() => {
    axios
      .post(`${base_URL}`, data)
      .then((res) => {
        console.log(res.data);
        setData(res.data.result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [data]);
};
