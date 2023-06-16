require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const { API_URL, PRIVATE_KEY,GOERLI_API } = process.env;
module.exports = {
  solidity: "0.8.17",
  
  mocha: {
    timeout: 40000,
  },
  networks: {
    localhost: {
      chainId: 31337
    },
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
      },
      goerli: {
        url: GOERLI_API,
      accounts: [`0x${PRIVATE_KEY}`]
      }
  }
};
