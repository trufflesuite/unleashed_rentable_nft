const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*"
    // },
    // goerli: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 5,
    //   gas: 5500000,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.15"
    }
  }
};
