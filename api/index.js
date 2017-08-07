import express from 'express';
var app = express();
var router = express.Router();
import beansList from '../src/exampleBeanData';

var beans = beansList.reduce((obj, cur) => {
  obj[cur.name] = cur;
  return obj;
}, {});

console.log('index', beans);

router.get('/beans', function (req, res) {
  res.send({test:beans});
});


router.get('/beans/:beanName', function (req, res) {
  var beanName= req.params.beanName.slice(2);
  beanName = beanName.slice(0, beanName.length-1);
  console.log('params', beanName)
  let bean = beans[req.params.beanName];

  res.send(bean);

});

module.exports = router;