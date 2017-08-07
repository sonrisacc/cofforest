import express from 'express';
var app = express();
var router = express.Router();
import beans from '../src/exampleBeanData';


console.log('index', beans);

router.get('/beans', function (req, res) {
  res.send({test:beans});
});


router.get('/beans/:beanName', function (req, res) {
  res.send({test:beans});
});
module.exports = router;