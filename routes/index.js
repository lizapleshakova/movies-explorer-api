const router = require('express').Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');

const NotFoundError = require('../errors/notFoundError');

const { loginValidation, createUserValidation } = require('../middlewares/validation');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);
router.use(userRoutes);
router.use(movieRoutes);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
