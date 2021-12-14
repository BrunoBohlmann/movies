const mongoose = require("mongoose");

// ! Variables de entorno para crear la conexion a la DB
const { MOVIES_APP_MONGODB_HOST, MOVIES_APP_MONGODB_DB } = process.env;
//! Conexion a la DB
const MONGODB_URI = `mongodb://${MOVIES_APP_MONGODB_HOST}/${MOVIES_APP_MONGODB_DB}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));
