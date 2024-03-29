//Require in an duse the .env
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;




//controller
const character = require("./controller/character.controller");

// Middleware

app.use(express.json());


//Routes
app.use("/characters", character);

//console.log(PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });