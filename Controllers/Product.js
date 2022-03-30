const asyncHandler = require("../Middlewares/asyncHandler");
const errorResponse = require("../Utils/errorResponse");
const ProductSchema = require("../Models/Product");

exports.createProduct = asyncHandler(async (req, res, next) => {
  const newProducto = ProductSchema.create(req.body);
  newProducto.set(req.body.precios.price, req.body.precios._idListPrice);
  res.status(201).json({
    success: true,
    data: newProducto,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const productos = ProductSchema.find();
  res.status(200).json({
    success: true,
    data: productos,
  });
});
