const Migrations = artifacts.require("ezeynftFactory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
