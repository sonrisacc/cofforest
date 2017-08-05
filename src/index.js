import React from 'react';
import ReactDOM from 'react-dom';
import BeanData from './exampleBeanData'

import App from './components/App';

ReactDOM.render(
   <App coffeeBeans={BeanData}/>,
   document.getElementById('beans')
);


