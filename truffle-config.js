require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: () => new HDWalletProvider({ mnemonic : process.env.MNEMONIC, providerOrUrl : `https://kovan.infura.io/v3/${process.env.INFURA_APIKEY}`, addressIndex : 6 ,  numberOfAddresses : 10}),
      network_id: 42,
      gas: 8000000
    }  
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: " >=0.6.0 <=0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      optimizer: {
        enabled: true,
        runs: 200
      }
      //evmVersion: "petersburg"
    }
  }
}
