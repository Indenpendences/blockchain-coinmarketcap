require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL !== undefined ? GOERLI_RPC_URL : "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [PRIVATE_KEY],
      chainId: 31337,
    },
  },
  mocha: {
    timeout: 3000,
  },
};
