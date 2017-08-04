import config from './config';
import express from 'express';

console.log(config)
const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.listen(config.port, () => {
  console.log('Listening on http://' + config.ip + ':' + config.port);
});



