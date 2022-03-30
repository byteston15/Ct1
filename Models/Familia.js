const mongoose = require("mongoose");
const slugify = require("slugify");

const FamiliaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: [3, "Ingresa al menos 3 caracteres"],
      max: [70, "Máximo 70 caracteres"],
      unique: true,
    },
  },
  { timestamps: true }
);

FamiliaSchema.pre("save", function (next) {
  this.name = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Familia", FamiliaSchema);
