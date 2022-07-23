const Migrations = artifacts.require("ezeyNFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
