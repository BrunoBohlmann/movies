//Requiero dotenv para usar variables de entorno
require("dotenv").config();

//Traigo el servidor, la base de datos y el puerto que asigne automaticamente la pc
const app = require("./server");
require("./db");
const port = app.get("port");

//!Empiezo a correr el servidor
app.listen(port, () => {
  console.log(`Server en puerto ${port}`);
});
