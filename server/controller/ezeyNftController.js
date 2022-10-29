const db = require("../connectDB/DB");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const EzeyNFTFEventABI = require("../Artifacts/ezeyNftEvent.json");

const wsProvider = new Web3.providers.WebsocketProvider(
  "wss://morning-twilight-cherry.matic-testnet.quiknode.pro/6ba9d2c5b8a046814b28f974c3643c679914f7ff/"
);

HDWalletProvider.prototype.on = wsProvider.on.bind(wsProvider);
let walletKEY = process.env.WALLET_KEY;
let provider = new HDWalletProvider(walletKEY, wsProvider);

const web3 = new Web3(provider);

let name;
let symbol;
let addressWallet;
let walletID;
let tokenIds;
let tokenURI;
let description;
let contractAddress;
async function Event_Handler(err, data) {
  let result = data.returnValues;
  if (!err) {
    name = result.name;
    symbol = result.symbol;
    tokenURI = result.tokenURI;
    description = result.description;
    walletID = result.walletID;
    tokenIds = result._tokenIds;
    contractAddress = result.contractAddress;
    addressWallet = result.addressWallet;
    console.log(result);
    insertData();
  }
}

async function listenEvent() {
  try {
    let eventEmiterContract = new web3.eth.Contract(
      EzeyNFTFEventABI.abi,
      "0x8f6BF5227dEcfc5249500235361F845e1b4dE3Fc"
    );
    await eventEmiterContract.events.newCollection(Event_Handler);
  } catch (error) {
    console.log(error);
  }
}

async function insertData(req, res) {
  try {
    db.query(
      `SELECT * FROM ezeyNFT.userNFT WHERE addressWallet = '${addressWallet}'  `,
      async (err, result) => {
        if (err) {
          throw err;
        } else if (!result[0]) {
          await newUser();
          await insertToCollectionNFTable();
        } else {
          await insertToCollectionNFTable();
        }
      }
    );
    return { newResult: "The registration account was successfuly" };
  } catch (error) {
    console.log(error);
  }
}

async function newUser(req, res) {
  try {
    db.query(
      `INSERT INTO ezeyNFT.userNFT (id,addressWallet) VALUES ('${walletID}','${addressWallet}')  `,
      (err) => {
        if (err) throw err;
        console.log("The registration account was successful");
        return { newResult: "The registration account was successful" };
      }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function insertToCollectionNFTable(req, res) {
  try {
    db.query(
      `INSERT INTO ezeyNFT.collectionNFT (NFTSymbol,NFTUrl,IDAddressWallet,name,description,tokenIds,contractAddress) VALUES ('${symbol}','${tokenURI}','${walletID}','${name}','${description}','${tokenIds}','${contractAddress}')  `,
      (err) => {
        if (err) throw err;
      }
    );
    return { newResult: "The registration was successfuly" };
  } catch (err) {
    console.log(err);
    res.json({ err: error });
  }
}

function getAllData(req, res) {
  try {
    db.query(
      `select * from ezeyNFT.userNFT INNER JOIN ezeyNFT.collectionNFT ON collectionNFT.IDAddressWallet=userNFT.id  `,
      (err, result) => {
        if (err) throw err;
        return res.status(200).json({ res: result });
      }
    );
  } catch (err) {
    res.json(err);
  }
}

function getDataById(req, res) {
  try {
    let IDAddressWallet = req.body.IDAddressWallet;
    db.query(
      `select * from ezeyNFT.userNFT INNER JOIN ezeyNFT.collectionNFT ON collectionNFT.IDAddressWallet =userNFT.id where IDAddressWallet = ${IDAddressWallet} order by userNFT.id`,
      (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ res: result });
        return res;
      }
    );
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

module.exports = {
  insertData,
  getAllData,
  getDataById,
  listenEvent,
};
