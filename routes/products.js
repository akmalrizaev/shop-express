import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Shop | Express',
    token: true,
  });
});

router.get('/products', (req, res) => {
  res.render('products', {
    title: 'Products | Shop',
    isProducts: true,
  });
});

router.get('/add', (req, res) => {
  res.render('add', {
    title: 'Add product',
    isAdd: true,
  });
});

export default router;
