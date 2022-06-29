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
let tokenURI;
let description;
async function Event_Handler(err, data) {
  let result = data.returnValues;
  if (!err) {
    console.log(result);
    name = result.name;
    symbol = result.symbol;
    tokenURI = result.tokenURI;
    description = result.description;
    walletID = result.walletID;
    addressWallet = result.addressWallet;
    console.log(result);
    insertToCollectionTable();
  }
}

async function listenEvent() {
// const contract = new web3.eth.Contract(EzeyNFTFEventABI,"0x2Bf63F3dbfdABe7103B1cbD9982Ac62356295B7E")
// contract.events.newCollection({}).on('data',async (event)=>{console.log(event);})

  try {
    let eventEmiterContract = new web3.eth.Contract(
      EzeyNFTFEventABI.abi,
      "0x2Bf63F3dbfdABe7103B1cbD9982Ac62356295B7E"
    );
    await eventEmiterContract.events.newCollection(Event_Handler);
  } catch (error) {
    console.log(error);
  }
}


async function insertToCollectionTable(req, res) {
  try {
    async function insertToTable() {
      db.query(
        `INSERT INTO ezeyNFT.collectionNFT (NFTSymbol,NFTUrl,IDAddressWallet,name,description) VALUES ('${symbol}','${tokenURI}','${walletID}','${name}','${description}')  `,
        (err, newResult) => {
          if (err) throw err;
          console.log(newResult);
          return newResult;
        }
      );
    }

    db.query(
      `SELECT * FROM ezeyNFT.userNFT WHERE addressWallet = '${addressWallet}'  `,
      async (err, result) => {
        if (err) {
          throw err;
        } else if (result.length == 0) {
          async function newUser() {
            db.query(
              `INSERT INTO ezeyNFT.userNFT (id,addressWallet) VALUES ('${walletID}','${addressWallet}')  `,
              (err) => {
                if (err) throw err;
                return res;
              }
            );
          }
          await newUser();

          await insertToTable();
        } else {
          await insertToTable();
        }
        // console.log(result);
        // res.send(result);
        return result;
      }
    );
  } catch (error) {
    console.log(error);
  }
}

function getAllData(req, res) {
  db.query(
    `select * from ezeyNFT.userNFT INNER JOIN ezeyNFT.collectionNFT ON collectionNFT.IDAddressWallet=userNFT.id  `,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({ res: result });
      return res;
    }
  );
}

function getDataById(req, res) {
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
}

function upDateDetails(req, res) {
  let IDAddressWallet = req.body.IDAddressWallet;
  let NFTUrl = req.body.NFTUrl;
  let idToUpdate = req.body.idToUpdate;

  db.query(
    `update ezeyNFT.collectionNFT set IDAddressWallet = ${IDAddressWallet}, NFTUrl=${NFTUrl} where id = ${idToUpdate}  `,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      // res.send(result);
      // return console.log(res);
    }
  );
}

function walletExist(req, res) {
  let addressWallet = req.body.addressWallet;

  db.query(
    `SELECT * FROM ezeyNFT.userNFT WHERE addressWallet = '${addressWallet}'  `,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
      return result;
    }
  );
}

function deleteItemInTable(length) {
  db.connect(async function (err) {
    if (err) throw err;
    // for (let i = 0; i < 4; i++) {
    var sql = `DELETE FROM  ezeyNFT.userNFT WHERE id = 5`;
    await db.query(sql, (error, result, fields) => {
      if (err) throw err;
      // console.log("Number of records deleted: " + result.affectedRows);
    });
    // }
  });
}
listenEvent();

module.exports = {
  insertToCollectionTable,
  getAllData,
  walletExist,
  getDataById,
};
