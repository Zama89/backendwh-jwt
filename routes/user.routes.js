const res = require('express/lib/response');
const User = require('../models/User.model');

const router = require('express').Router();

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/setfavorite', isAuthenticated, async (req, res, next) => {
  const user = req.payload;

  const { armyId } = req.body;
  console.log('armyId', armyId);

  try {
    const foundUser = await User.findByIdAndUpdate(user._id, { $push: { favoriteArmies: armyId } });
    res.json(foundUser);
  } catch (error) {
    next(error);
  }
});

router.get('/is-favorite/:favId', async (req, res, next) => {
  const { favId } = req.params;
  const user = req.payload;
  const userFound = await User.find({ _id: user._id, favoriteArmies: { $in: [favId] } }).populate('favoriteArmies');
  res.json({
    user: userFound,
  });
});

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
