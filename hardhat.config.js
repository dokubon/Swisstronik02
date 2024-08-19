require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["891e59fb35be0e83f1150d45d48a34f2a43d06bd58402b2c8828edf5ac244d16"],
    },
  },
};
