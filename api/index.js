import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';


let mdb;  //global
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});


var app = express();
var router = express.Router();


let beansData = {}

router.get('/beans', function (req, res) {
  mdb.collection('Beans').find({})
    .project({
      id:1,
      categoryName:1,
      beanName:1
    })
    .each((err, bean) => {
      assert.equal(null, err);
      if (!bean) {
        console.log(beansData);
        res.send({test:beansData});
        return;
      }
      beansData[bean.beanName] = bean;

    });

});


router.get('/beans/:beanName', function (req, res) {

  mdb.collection('Beans')
    .findOne({beanName: req.params.beanName})
    .then(bean => res.send(bean))
    .catch(console.error);


});

module.exports = router;
