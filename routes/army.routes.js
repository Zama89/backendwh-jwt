const Army = require('../models/Army.model');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  /*res.json('home');*/
  const showArmies = await Army.find({});
  console.log(showArmies);
  res.json(showArmies);
}); /*acabar home*/

/*GET ARMIES*/
router.get('/army', async (req, res, next) => {
  const showArmies = await Army.find();
  console.log(showArmies);
  res.json(showArmies);
});

/*create an army */
router.post('/add', async (req, res, next) => {
  const { heroe, general, infantry, artillery, name, advice, owner } = req.body;
  const newArmy = await Army.create({ heroe, general, infantry, artillery, name, advice, owner });
  /*añadir vinculación IdUser con su ejercito correspondiente*/
  res.json(newArmy);
});

/*GET one army*/
router.get('/army/:id', async (req, res, next) => {
  const { id } = req.params;
  const oneArmy = await Army.findById(id).populate('owner');
  res.json(oneArmy);
});

router.post('/army/:id', async (req, res, next) => {
  console.log('actualizando');
  const { heroe, general, infantry, artillery, name, advice } = req.body;
  const { id } = req.params;
  const foundArmy = await Army.findByIdAndUpdate(id, { $set: { heroe, general, infantry, artillery, name, advice } });
  res.json(foundArmy);
});

/*Delete an army*/
router.delete('/army/:id', async (req, res, next) => {
  const { id } = req.params;
  const deletedArmy = await Army.findByIdAndDelete(id);
  res.json(deletedArmy);
});

//show armies del user
router.get('/myarmies/:id', async (req, res, next) => {
  const { id } = req.params;
  const oneArmy = await Army.find({ owner: id }).populate('owner');
  res.json(oneArmy);
});

//show favorites armies del user
router.get('/my-favorites', async (req, res, next) => {
  const user = req.payload;
  const favoriteArmies = await Army.find({ _id: user.favoriteArmies.includes(_id) });
  res.json(favoriteArmies);
});

module.exports = router;
