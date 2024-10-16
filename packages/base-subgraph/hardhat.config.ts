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