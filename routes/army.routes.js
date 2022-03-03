const Army = require('../models/Army.model');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

/*create an army */
router.post('/army', async (req, res, next) => {
  const { heroe, general, infantry, artillery, name, advice, gold } = req.body;
  const newArmy = await Army.create({ heroe, general, infantry, artillery, name, advice, gold });
  res.json(newArmy);
});

/*GET one army*/
router.get('/army/:id', async (req, res, next) => {
  const { id } = req.params;

  const oneArmy = await Army.findById(id);
  res.json(oneArmy);
});

router.post('/army/:id', async (req, res, next) => {
  const { heroe, general, infantry, artillery, name, advice, gold } = req.body;
  const { id } = req.params;
  const foundArmy = await Army.findByIdAndUpdate(id, { $set: { heroe, general, infantry, artillery, name, advice, gold } });
  res.json(foundArmy);
});

/*Show all armies*/
router.get('/army', async (req, res, next) => {
  const showArmies = await Army.find();
  res.json(showArmies);
});

/*Delete an army*/
router.delete('/army/:id', async (req, res, next) => {
  const { id } = req.params;
  const deletedArmy = await Army.findByIdAndDelete(id);
  res.json(deletedArmy);
});

module.exports = router;
