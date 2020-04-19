const Image = require('../../db/Schemas/image');

const getImage = (request, response) => {
  const sendResponse = image => {
    response.json({
      status: 'success',
      image,
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'image was not saved',
    });
  };

  Image.find().then(sendResponse).catch(sendError);
};

module.exports = getImage;
