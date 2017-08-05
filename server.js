import config from './config';
import express from 'express';
// import router from './api/router';
import data from './src/exampleBeanData';


const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Welcome to <em> Cofforest </em>!'
  });
});

server.get('/main', (req, res) => {
  res.send({test:data})
});


//server.use('/api/router', router);
server.use(express.static('public'));


server.listen(config.port, () => {
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