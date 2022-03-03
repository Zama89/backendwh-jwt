const Army = require('../models/Army.model');

const router = require('express').Router();

router.get('/army', async (req, res, next) => {
  const showArmies = await Army.find();
  res.json(showArmies);
});

/*create an army */
router.post('/army', async (req, res, next) => {
  const { heroe, general, infantry, artillery, name, advice } = req.body;
  const newArmy = await Army.create({ heroe, general, infantry, artillery, name, advice });
  res.json(newArmy);
});

/*GET one army*/
router.get('/army/:id', async (req, res, next) => {
  const { id } = req.params;

  const oneArmy = await Army.findById(id);
  res.json(oneArmy);
});

router.post('/army/:id', async (req, res, next) => {
  const { heroe, general, infantry, artillery, name, advice } = req.body;
  const { id } = req.params;
  const createdBy = req.session.currentUser._id;
  const foundArmy = await Army.findByIdAndUpdate(id, { $set: { heroe, general, infantry, artillery, name, advice, createdBy } });
  res.json(foundArmy);
});

/*Delete an army*/
router.delete('/army/:id', async (req, res, next) => {
  const { id } = req.params;
  const deletedArmy = await Army.findByIdAndDelete(id);
  res.json(deletedArmy);
});

module.exports = router;
