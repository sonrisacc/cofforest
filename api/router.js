import express from 'express';
//import data from '../src/exampleBeanData';

const router = express.Router();


router.get('/api/main', (req, res) => {
  res.send('hey');
});


export default router;