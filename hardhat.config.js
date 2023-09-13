// hardhat.config.js
require("@nomiclabs/hardhat-ethers");

module.exports = {
  networks: {
    rinkeby: {
      url: "http://go-ethereum:8545", // TODO switch to plugeth
      accounts: ["PRIVATE_KEY"] // TODO explain how to find this
    }
  },
  solidity: "0.8.0",
};

