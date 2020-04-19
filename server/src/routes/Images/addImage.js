const Image = require('../../db/Schemas/image');

const addImage = (request, response) => {
  const image = request.body;

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

  const newImage = new Image(image);

  newImage.save().then(sendResponse).catch(sendError);
};

module.exports = addImage;
