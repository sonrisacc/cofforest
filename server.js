import config from './config';
import express from 'express';
//import router from './api/router';

import http from 'http';
import beans from './src/exampleBeanData';
import urlParser from 'url';



const server = express();



server.set('view engine', 'ejs');


import serverRender from './requestHandler';


server.get(['/', '/bean/:beanId'], (req, res) => {
  serverRender()
  .then(({initialBeanList, initialData}) => {
    res.render('index', {
      initialBeanList,
      initialData
    });
  })
  .catch(console.error)

});

//['/', '/bean/:beanId']

server.get('/main', (req, res) => {
  res.send({test:beans})
});



//server.use('/api/router', router);
server.use(express.static('public'));


server.listen(config.port, config.ip, () => {
  console.log('Listening on http://' + config.ip + ':' + config.port);
});



/*
import fs from 'fs';
can be replacement of line11
server.get('/about.html', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});
*/