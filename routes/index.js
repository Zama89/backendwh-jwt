const router = require('express').Router();
const Army = require('../models/Army.model');
const User = require('../models/User.model');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

/*create an army */
router.post('/army', (req, res, next) => {
  const {
    /*propiedades del army*/
  } = req.body;
  Army.create({
    /*propiedades del army*/
  })
    .then(() => res.redirect('/'))
    .catch(error => {
      console.log('Error while creating army occurred', error);
      res.json('/army');
    });
});

/*edit army*/
router.get('/army/:id', (req, res, next) => {
  const { id } = req.params;

  Army.findById(id)
    .then(ArmyToEdit => {
      res.json('army/armyId', { ArmyToEdit });
    })
    .catch(error => next(error));
});

router.post('/army/:id/', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id)
    .then(() => res.json('/army'))
    .catch(error => console.log('Error while updating army occurred'));
});

/*Show all armies*/
router.get('/army', (req, res, next) => {
  Army.find()
    .then(returnedArmy => {
      res.json('/army');
      console.log(returnedArmies);
    })
    .catch(error => console.log('Error while finding armies occurred'));
});

/*Show one army*/
router.get('/army/:id', (req, res, next) => {
  const { id } = req.params;

  Army.findById(id)
    .then(foundArmy => {
      res.json('army/:id');
    })
    .catch(error => next(error));
});

/*Delete an army*/
router.delete('/army/:id', (req, res, next) => {
  const { id } = req.params;
  Army.findByIdAndDelete(id)
    .then(() => res.json('/army'))
    .catch(error => console.log('Error while deleting army occurred'));
});

module.exports = router;
