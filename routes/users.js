const router = require('express').Router();
const {
  getUsers,
  updateProfile,
} = require('../controllers/users');

const { updateProfileValidation } = require('../middlewares/validation');

router.get('/users', getUsers);

router.patch('/users/me', updateProfileValidation, updateProfile);

module.exports = router;
