//fetch data
import axios from 'axios';
import config from './config';




axios.get(`${config.serverUrl}/main`).then(res => {
    console.log('requestHandler', res.data);
});


