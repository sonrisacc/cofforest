import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  db.collection('Beans').insertMany([
    { id: 1,
      categoryName: 'darkRoast',
      beanName: 'Sumatran Mandeling',
      waterTemp: '203F',
      weight:'28g',
      grindFineness:'medium coarse',
      regionIds: [101] },
    { id: 2,
      categoryName: 'medRoast',
      beanName: 'Kenya AA',
      waterTemp: '205F',
      weight:'25g',
      grindFineness:'medium coarse',
      regionIds: [102] },
    { id: 2,
      categoryName: 'lightRoast',
      beanName: 'Costa Rica',
      waterTemp: '208F',
      weight:'23g',
      grindFineness:'medium coarse',
      regionIds: [103] },
    { id: 2,
      categoryName: 'lightRoast',
      beanName: 'Ethiopia',
      waterTemp: '200F',
      weight:'25g',
      grindFineness:'medium coarse',
      regionIds: [104] },


  ]).then(response => {
    console.info('Beans', response.insertedCount);
    db.collection('Region').insertMany([
      { id: 101, regionName: 'Indonesia', timestamp: new Date() },
      { id: 102, regionName: 'Kenya', timestamp: new Date() },
      { id: 103, regionName: 'Tarrazu Costa Risa', timestamp: new Date() },
      { id: 104, regionName: 'Nembo, Sidamo', timestamp: new Date() },
    ]).then(response => {
      console.info('Region', response.insertedCount);
      db.close();
    });
  });
});
