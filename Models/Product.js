const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      trim: true,
      min: [4, "El código debe tener al menos 4 caracteres"],
      max: [30, "El código puede tener hasta 30 caracteres"],
      unique: true,
      required: true,
    },
    descripcion: {
      type: String,
      trim: true,
      min: [4, "El código debe tener al menos 4 caracteres"],
      max: [30, "El código puede tener hasta 30 caracteres"],
      required: true,
    },
    barra: {
      type: String,
      trim: true,
      min: [4, "El código debe tener al menos 4 caracteres"],
      max: [30, "El código puede tener hasta 30 caracteres"],
      required: true,
    },
    _idFamilia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Familia",
      required: true,
    },
    precios: {
      type: Map,
      of: new mongoose.Schema({
        price: Number,
        _idList: {
          type: ObjectId,
          ref: "Price",
        },
      }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
