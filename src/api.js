import axios from 'axios';

export const fetchBean = (beanName) => {
  return axios.get('/api/beans/${beanName}')
              .then(res =>res.data);
};

