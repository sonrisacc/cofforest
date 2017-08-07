import axios from 'axios';

export const fetchBean = (beanName) => {
  return axios.get('/api/beans/${beanName}')
              .then(res =>res.data);
};


export const fetchBeanList = () => {
  console.log('heyyy')
  return axios.get('/api/beans')
              .then(res =>res.data);
};



 // api.fetchBeanList().then(beans => {
 //      this.setState({
 //        currentBeanId:-1,
 //        beans: beans
 //      });
 //    });
