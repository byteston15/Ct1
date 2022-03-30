const mongoose = require("mongoose");

const connDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected mongodb on host ${conn.connection.host}`);
};

module.exports = connDb;
