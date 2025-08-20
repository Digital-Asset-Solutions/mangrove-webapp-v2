import { defineChain } from "viem"

export const eden = /*#__PURE__*/ defineChain({
  id: 1234,
  name: "Eden Testnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["/api/rpc/1234"],
    },
  },
  blockExplorers: {
    default: {
      name: "Somnia Testnet Explorer",
      url: "https://explorer-edennet-1-testnet.binary.builders:8443/",
      apiUrl: "https://explorer-edennet-1-testnet.binary.builders:8443/api",
    },
  },
  contracts: {
    multicall3: {
      address: "0xf2C48f93aEc0EccE78BC30CD148E60C00c0Bcc4C",
      blockCreated: 38765,
    },
  },
  testnet: true,
})
