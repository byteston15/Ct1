const express = require("express");
const dotenv = require("dotenv");
const connDb = require("./Db/connDb");
const routerFamilia = require("./Routes/Familia.js");
const routerList = require("./Routes/Price.js");
const routerProduct = require("./Routes/Product");
const errorHandler = require("./middlewares/error");
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;
const app = express();

//Connectdb
connDb();

//JSON CONVERT
app.use(express.json());

//Routes
app.use("/api/v1/ct1", routerFamilia);
app.use("/api/v1/ct1", routerList);
app.use("/api/v1/ct1", routerProduct);

//Error handler
app.use(errorHandler);

const server = app.listen(PORT, console.log(`We're on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
