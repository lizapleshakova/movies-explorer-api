const router = require('express').Router();
const {
  getUser,
  updateProfile,
} = require('../controllers/users');

const { updateProfileValidation } = require('../middlewares/validation');

router.get('/users/me', getUser);

router.patch('/users/me', updateProfileValidation, updateProfile);

module.exports = router;
