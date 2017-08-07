import express from 'express';
var app = express();
var router = express.Router();
import beansList from '../src/exampleBeanData';

var beans = beansList.reduce((obj, cur) => {
  obj[cur.id] = cur;
  return obj;
}, {});

console.log('index', beans);

router.get('/beans', function (req, res) {
  res.send({test:beans});
});


router.get('/beans/:beanId', function (req, res) {
 // console.log('params', req.params)
  let bean = beans[req.params.beanId];
  bean.brew= 'heyheyIm working now';
  res.send(bean);

});

module.exports = router;