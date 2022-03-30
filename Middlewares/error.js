const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Log para el developer
  console.log(err.message);

  //IdError
  if (err.name === "CastError") {
    const message = `No se encuentra elemento con el id ${err.value}`;
    error = new errorResponse(message, 404);
  }

  //Duplicate pk
  if (err.code == 11000) {
    //KeyValue accede al valor enviado
    const message = `El nombre '${err.keyValue.name}' ya esta registrado! `;
    error = new errorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(message, 400);
  }

  //Res error
  res
    .status(error.statusCode)
    .json({ success: false, message: error.message || 500 });
};

module.exports = errorHandler;
