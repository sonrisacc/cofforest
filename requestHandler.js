//fetch data
import axios from 'axios';
import config from './config';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';


//pre-render react
const serverRender = () =>
  axios.get(`${config.serverUrl}/main`)
    .then(res => {
      console.log('requestHandler res data', res.data);
      return {
        initialBeanList: ReactDOMServer.renderToString(
            <App initialBeans={res.data.test}/>
          ),
        initialData: res.data

     }

  });


export default serverRender;