const mongoose = require('mongoose');
const User = require('../models/User.model');
const MONGO_URI = process.env.MONGODB_URI;
const users = [
  {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
   {
    username: 
    email:
    hashedPassword:
  },
]


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to Mongodb');
    return User.deleteMany();
  })
  .then(() => {
    return User.insertMany(users);
  })
  .then(createdUsers => {
    console.log(`Created ${createdUsers.length} users`);
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(error => console.log(`An error occurred while creating users from the DB: ${error}`));
