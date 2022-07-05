const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const ezeyRouting = require("./routing/EzeyNFT");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", ezeyRouting);
const PORT = process.env.PORT;
app.listen(PORT || 5000, (err) => {
  if (err) console.log(err);
});
