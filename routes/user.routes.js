const res = require('express/lib/response');
const User = require('../models/User.model');

const router = require('express').Router();

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/:id', async (req, res, next) => {
  const { username, email } = req.body;
  const { id } = req.params;
  const foundUser = await User.findByIdAndUpdate(id, { $set: { username, email } });
  res.json(foundUser);
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const userSelected = await User.findById(id);

  res.json(userSelected);
});

module.exports = router;
