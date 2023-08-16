require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/bukXMnoDrjEhsANa-07mvfoJKASH3Yth",
      accounts: [
        "989610fa5c55b5101aeca9734cd5977e9ca6b9247025b380cab76568228b0349",
      ],
    },
    hardhat: {},
  },
};
