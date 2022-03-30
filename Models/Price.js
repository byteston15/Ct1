const mongoose = require("mongoose");
const slugify = require("slugify");

const PriceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: [3, "La lista debe tener al menos 3 caracteres"],
      max: [70, "La lista puede tener hasta 70 caracteres"],
      trim: true,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

PriceSchema.pre("save", function (next) {
  this.name = slugify(this.name, { lower: true });
  next();
});
module.exports = mongoose.model("Price", PriceSchema);
