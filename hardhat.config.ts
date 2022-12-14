import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const mnemonic = "fa24310d13337b42f515a301d2ee19c6ff7a9325145d8df847eb0a0c627e229b";
const infura_api_key = "api_key";
const infura_api_secret = "api_secret";

// Need to change local variables

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      /*accounts: {
        mnemonic,
      },*/
      chainId: 1337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infura_api_key}`,
      httpHeaders: {
        Authorization: `Basic ${Buffer.from(":" + infura_api_secret).toString("base64")}`,
      },
      accounts: {
        mnemonic,
      },
    }
  },
};

export default config;
