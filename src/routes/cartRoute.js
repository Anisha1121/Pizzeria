const express = require('express');
const { getCartById } = require('../controllers/cartController'); // adjust path as needed
const cartRouter = express.Router();
cartRouter.get('/:id', getCartById);
module.exports = cartRouter;