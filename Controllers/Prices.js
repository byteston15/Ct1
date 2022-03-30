const asyncHandler = require("../Middlewares/asyncHandler");
const PriceSchema = require("../Models/Price");
const errorResponse = require("../Utils/errorResponse");

exports.createList = asyncHandler(async (req, res, next) => {
  const newList = await PriceSchema.create(req.body);
  res.status(201).json({
    success: true,
    data: newList,
  });
});

exports.getList = asyncHandler(async (req, res, next) => {
  const list = await PriceSchema.findById(req.params.id);
  if (!list) {
    next(
      new errorResponse(`problemas con el formato del id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: list,
  });
});

exports.getLists = asyncHandler(async (req, res, next) => {
  const lists = await PriceSchema.find();
  res.status(200).json({
    success: true,
    data: lists,
  });
});

exports.deleteList = asyncHandler(async (req, res, next) => {
  const list = await PriceSchema.findOneByIdAndRemove(req.params.id);
  if (!list) {
    next(
      new errorResponse(
        `Problemas con el id : ${req.params.id}, formato incorrecto`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.updateList = asyncHandler(async (req, res, next) => {
  const newList = await PriceSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!newList) {
    next(
      new errorResponse(
        `Problemas con el formato del id entregado para Lista de precio : ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: newList,
  });
});
