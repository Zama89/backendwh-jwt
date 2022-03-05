require('dotenv/config');
require('./db');
const express = require('express');
const { isAuthenticated } = require('./middleware/jwt.middleware');
const allRoutes = require('./routes');
const authRouter = require('./routes/auth.routes');
const protectedRoute = require('./routes/protected.routes');
const armyRouter = require('./routes/army.routes');
const userRouter = require('./routes/user.routes');

const app = express();

require('./config')(app);

app.use('/api', allRoutes);
app.use('/api', armyRouter);
app.use('/api/protected', isAuthenticated, protectedRoute);
app.use('/auth', authRouter);
app.use('/user', userRouter);

require('./error-handling')(app);

module.exports = app;
