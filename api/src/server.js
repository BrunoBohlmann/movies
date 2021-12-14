const express = require("express");
const path = require("path");

//Initialization
const app = express();

//Settings
app.set("port", process.env.PORT || 4000); //Esto es para q el nro de puerto lo designe auto la computadora que corre
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(express.urlencoded({ extended: false }));

//GLobal Variables

//Routes
app.get("/", (req, res) => {
  res.send("Hola mundo");
});
//Static files
app.use(express.static(path.join(__dirname, "public")));

//Export
module.exports = app;
