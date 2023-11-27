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

router.post('/add-products', userMiddleware, async (req, res) => {
  const { title, description, image, price } = req.body;
  if (!title || !description || !image || !price) {
    req.flash('errorAddProducts', 'All fields is required');
    res.redirect('/add');
    return;
  }

  await Product.create({ ...req.body, user: req.userId });
  res.redirect('/');
});

export default router;
