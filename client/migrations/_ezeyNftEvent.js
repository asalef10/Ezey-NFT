const Migrations = artifacts.require("ezeyNftEvent");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
