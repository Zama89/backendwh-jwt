const User = require('../models/User.model');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});
