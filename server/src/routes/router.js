const express = require('express');

const addImage = require('./Images/addImage');
const getImage = require('./Images/getImages');

const apiRoutes = express.Router();

apiRoutes

  .get('/image', getImage)
  .post('/image', addImage)

  // ERROR ROUTE
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });

module.exports = apiRoutes;
