const express = require('express');
const { createUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', createUser);

module.exports = userRouter;
// This code defines a route for creating a new user. It imports the necessary modules,