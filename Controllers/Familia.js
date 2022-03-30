const FamiliaSchema = require("../Models/Familia");
const errorResponse = require("../Utils/errorResponse");
const asyncHandler = require("../middlewares/asyncHandler");

exports.getFamilia = asyncHandler(async (req, res, next) => {
  const familia = await FamiliaSchema.findById(req.params.id);
  if (!familia) {
    return next(
      new errorResponse(`Problemas con el formato del id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: familia,
  });
});

exports.getFamilias = asyncHandler(async (req, res, next) => {
  const familias = await FamiliaSchema.find();
  res.status(200).json({
    success: true,
    data: familias,
  });
});

exports.createFamilia = asyncHandler(async (req, res, next) => {
  const newFamilia = await FamiliaSchema.create(req.body);
  res.status(201).json({
    success: true,
    data: newFamilia,
  });
});

exports.updateFamilia = asyncHandler(async (req, res, next) => {
  const newFamilia = await FamiliaSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!newFamilia) {
    next(
      new errorResponse(
        `Problemas con el formato del id entregado para familia : ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: newFamilia,
  });
});
