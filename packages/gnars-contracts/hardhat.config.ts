import { HardhatUserConfig
} from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@openzeppelin/hardhat-upgrades"
import "@openzeppelin/hardhat-defender"
import "hardhat-abi-exporter"
import dotenv from "dotenv"

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.JSON_RPC_URL!,
        blockNumber: 16819216,
      },
    },
    mainnet: {
      url: process.env.JSON_RPC_URL,
      chainId: 1,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY
      ]
        : undefined,
    },
  },
  abiExporter: {
    runOnCompile: true,
    clear: true,
  },
  defender: {
    apiKey: process.env.DEFENDER_API_KEY!,
    apiSecret: process.env.DEFENDER_API_SECRET!,
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY!,
    },
  },
}

export default config


/**
 
// Integration Instructions: https://docs.tenderly.co/node/integrations-smart-contract-frameworks/hardhat
import { HardhatUserConfig, task, types } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
import * as dotenv from 'dotenv';

dotenv.config();

tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "tenderly",
  networks: {
    base: {
      url: "https://base.gateway.tenderly.co",
      chainId: 8453
    },
    tenderly: {
      url: `https://base.gateway.tenderly.co/${process.env.TENDERLY_API_KEY}`,
      chainId: 8453,
    },
  },
  tenderly: {
    username: "asmattic",
    project: "gnars-test",
  },
};
 */