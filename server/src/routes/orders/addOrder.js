const Order = require('../../db/Schemas/orders');

const addOrder = (request, response) => {
  const order = request.body;

  const newOrder = new Order(order);

  const sendResponse = order => {
    response.json({
      status: 'success',
      order,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not saved',
    });
  };

  newOrder.save().then(sendResponse).catch(sendError);
};

module.exports = addOrder;
