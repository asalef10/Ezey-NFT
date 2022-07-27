const ezeyRouting = require("express").Router();
const ezeyControllers = require("../controller/EzeyNftController");
ezeyRouting.post("/insertToCollectionTable", ezeyControllers.insertData);
ezeyRouting.get("/getAllData", ezeyControllers.getAllData);
ezeyRouting.post("/getDataById", ezeyControllers.getDataById);
ezeyRouting.post("/walletExist", ezeyControllers.walletExist);
module.exports = ezeyRouting;
