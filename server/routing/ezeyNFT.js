const ezeyRouting = require("express").Router();
const ezeyControllers = require("../controller/ezeyNftController");
ezeyRouting.post("/insertToCollectionTable", ezeyControllers.insertToCollectionTable);
ezeyRouting.get("/getAllData", ezeyControllers.getAllData);
ezeyRouting.post("/getDataById", ezeyControllers.getDataById);
ezeyRouting.post("/walletExist", ezeyControllers.walletExist);
module.exports = ezeyRouting;
