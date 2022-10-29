const Migrations = artifacts.require("ezeyNftFactory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
