var RentablePets = artifacts.require("RentablePets");

const main = async (cb) => {
    try {
        const argv = require('yargs/yargs')(process.argv.slice(4))
            .default("from", (await web3.eth.getAccounts())[0])
            .argv;
        const rentablePets = await RentablePets.deployed()
        let txn = await rentablePets.mint("fakeURI", {from: argv.from})
        console.log(txn);
    } catch(err) {
        console.log(err);
    }
    cb();
  }
  
module.exports = main;