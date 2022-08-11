const RentablePets = artifacts.require("RentablePets");

module.exports = function (deployer) {
  deployer.deploy(RentablePets);
};
