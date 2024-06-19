const { Mnemonic } = require("ethers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
// require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
module.exports = {
  solidity: {
    version: '0.8.19',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};















