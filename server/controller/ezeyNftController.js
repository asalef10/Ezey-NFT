const db = require("../connectDB/DB");

async function insertToUsersNFTable(req, res, id, addressWallet) {
  // let id = req.body.id;
  // let addressWallet = req.body.addressWallet;
  db.query(
    `INSERT INTO ezeyNFT.userNFT (id,addressWallet) VALUES ('${addressWallet}','${id}')  `,
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
      // return console.log(res);
    }
  );
}

async function insertToCollectionTable(req, res) {
  let NFTSymbol = req.body.NFTSymbol;
  let NFTUrl = req.body.NFTUrl;
  let IDAddressWallet = req.body.IDAddressWallet;
  let addressWallet = req.body.addressWallet;

  async function insertToTable() {
    db.query(
      `INSERT INTO ezeyNFT.collectionNFT (NFTSymbol,NFTUrl,IDAddressWallet) VALUES ('${NFTSymbol}','${NFTUrl}','${IDAddressWallet}')  `,
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
            `INSERT INTO ezeyNFT.userNFT (id,addressWallet) VALUES ('${IDAddressWallet}','${addressWallet}')  `,
            (err, result) => {
              if (err) throw err;
              // console.log(result);
              res.send(result);
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
module.exports = {
  insertToUsersNFTable,
  insertToCollectionTable,
  getAllData,
  walletExist,
  getDataById,
};
