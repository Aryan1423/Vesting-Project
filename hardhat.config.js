require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/3bV5TjDmlfCMMRIa5j9KY04zp02rcuUn",
      accounts: [`6806ab112638ecb619f66fc7a62d758f8bc8c23507c85162a8877a46dc534c39`]
    },
  },
};
