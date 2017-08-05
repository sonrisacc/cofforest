import express from 'express';
const router = express.Router();





router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/test', (req, res) => {
  res.render('test');
});
export default router;