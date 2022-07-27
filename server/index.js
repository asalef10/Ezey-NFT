const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const ezeyRouting = require("./routing/EzeyNFT");
const { listenEvent } = require("./controller/EzeyNftController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
listenEvent();

app.use("/", ezeyRouting);
const PORT = process.env.PORT;

app.listen(5000 || PORT, (err) => {
  if (err) console.log(err);
});
