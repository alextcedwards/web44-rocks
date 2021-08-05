require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json())
server.use(cors());
server.use(helmet());

server.use("*", (req, res, next) => {
  res.json({
    message: "web 44 is awesome indeed",
  });
});



server.listen(5000, () => {
    console.log(`listening on ${5000}`)
})
