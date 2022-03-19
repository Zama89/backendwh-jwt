const res = require('express/lib/response');
const User = require('../models/User.model');

const router = require('express').Router();

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const userSelected = await User.findById(id);

  res.json(userSelected);
});

router.post('/:id', async (req, res, next) => {
  const { username, email } = req.body;
  const { id } = req.params;
  const foundUser = await User.findByIdAndUpdate(id, { $set: { username, email } });
  res.json(foundUser);
});

router.post('/setfavorite', async (req, res, next) => {
  const user = req.payload;

  const { armyId } = req.body;

  const foundUser = await User.findByIdAndUpdate(user._id, { $set: { armyId } });
  res.json(foundUser);
});

router.get('/is-favorite/:favId', async (req, res, next) => {
  const { favId } = req.params;
  const user = req.payload;
  const userFound = await User.find({ _id: user._id, favoriteArmies: { $in: [favId] } }).populate('favoriteArmies');
  res.json({
    user: userFound,
  });
});

module.exports = router;
