import { MarketParams, Token } from "@mangrovedao/mgv"
import {
  arbitrumMangrove,
  arbitrumMarkets,
  arbitrumTokens,
  baseMangrove,
  baseMarkets,
  baseSepoliaLogics,
  baseTokens,
  blastLogics,
  blastMangrove,
  blastTokens,
  seiMangrove,
} from "@mangrovedao/mgv/addresses"
import { MangroveActionsDefaultParams } from "@mangrovedao/mgv/types"
import {
  arbitrum,
  base,
  baseSepolia,
  blast,
  megaethTestnet,
  sei,
  sepolia,
  somniaTestnet,
} from "viem/chains"
import { useDefaultChain } from "./use-default-chain"
import { eden } from "@/utils/edenChain"

export const aaveKandelSeeder = "0x55B12De431C6e355b56b79472a3632faec58FB5a"

export function useMangroveAddresses() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case blast.id:
      return blastMangrove
    case arbitrum.id:
      return arbitrumMangrove
    case base.id:
      return baseMangrove
    case sei.id:
      return seiMangrove
    case sepolia.id:
      return sepoliaMangrove
    case megaethTestnet.id:
      return megaEthTestnetMangrove
    case somniaTestnet.id:
      return somniaMangrove
    case eden.id:
      return edenMangrove
    default:
      return arbitrumMangrove
  }
}

export function useAaveKandelRouter() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case blast.id:
      return "" // no aave on blast
    case arbitrum.id:
      return "0xb3be00f615239b8553D725dC9F418e27a874d4dC"
    case base.id:
      return ""
    case sepolia.id:
      return "" // no aave on sepolia
    case megaethTestnet.id:
      return ""
    case somniaTestnet.id:
      return ""
    case eden.id:
      return ""
    default:
      return undefined
  }
}

export function useAaveKandelSeeder() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case arbitrum.id:
      return "0x55B12De431C6e355b56b79472a3632faec58FB5a"
    case base.id:
      return ""
    case sei.id:
      return ""
    case sepolia.id:
      return "" // no aave kandel seeder on sepolia
    case megaethTestnet.id:
      return ""
    case somniaTestnet.id:
      return ""
    case eden.id:
      return ""
    default:
      return undefined
  }
}

export function useKandelSeeder() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case arbitrum.id:
      return "0x89139bed90b1bfb5501f27be6d6f9901ae35745d"
    case base.id:
      return ""
    case sei.id:
      return ""
    case sepolia.id:
      return "" // no kandel seeder on sepolia
    case megaethTestnet.id:
      return ""
    case somniaTestnet.id:
      return "0x1021231D59D7188aC80bDc0914C9199939cB62eB"
    case eden.id:
      return ""
    default:
      return undefined
  }
}

export function useMarkets() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case arbitrum.id:
      return arbitrumMarkets
    case base.id:
      return baseMarkets
    case megaethTestnet.id:
      return megaEthTestnetMarkets
    case sei.id:
      return seiMarkets
    case sepolia.id:
      return sepoliaMarkets
    case somniaTestnet.id:
      return somniaMarkets
    case eden.id:
      return edenMarkets
    default:
      return baseMarkets
  }
}

export function useLogics() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case blast.id:
      return blastLogics
    case arbitrum.id:
      return []
    case base.id:
      return []
    case sei.id:
      return []
    case baseSepolia.id:
      return baseSepoliaLogics
    default:
      return []
  }
}

export function useTokens() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case blast.id:
      return blastTokens
    case arbitrum.id:
      return arbitrumTokens
    case base.id:
      return baseTokens
    case sei.id:
      return [SEIWSEI, SEIUSDC, SEIWETH, SEIWBTC]
    case sepolia.id:
      return [sepoliaWETH, sepoliaUSDC]
    case megaethTestnet.id:
      return [megaEthTestnetWETH, megaEthTestnetUSDC]
    case somniaTestnet.id:
      return [somniaWETH, somniaUSDC]
    case eden.id:
      return [edenWETH, edenUSDC]
    default:
      return baseTokens
  }
}

export function useCashnesses() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case arbitrum.id:
      return {
        WETH: 1000,
        WBTC: 2000,
        USDC: 1e6,
        USDT: 2e6,
      }
    case base.id:
      return {
        USDC: 1e6,
        EURC: 0.5e6,
        WETH: 1000,
        cbBTC: 2000,
        cbETH: 500,
        wstETH: 600,
      }
    case sepolia.id:
      return {
        USDC: 1e6,
        WETH: 1000,
      }
    case megaethTestnet.id:
      return {
        USDC: 1e6,
        WETH: 1000,
      }
    case somniaTestnet.id:
      return {
        USDC: 1e6,
        WETH: 1000,
      }
    case eden.id:
      return {
        USDC: 1e6,
        WETH: 1000,
      }
    default:
      return {
        WETH: 1000,
        WBTC: 2000,
        USDC: 1e6,
        USDT: 2e6,
      }
  }
}

export function useSymbolOverrides() {
  const { defaultChain } = useDefaultChain()

  switch (defaultChain.id) {
    case arbitrum.id:
      return {
        "USD₮0": "USDT",
      }
    case base.id:
      return {}
    default:
      return {}
  }
}

// SEI

const SEIWSEI = {
  address: "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
  symbol: "WSEI",
  decimals: 18,
  displayDecimals: 2,
  priceDisplayDecimals: 4,
  mgvTestToken: true,
} as const satisfies Token

const SEIUSDC = {
  address: "0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1",
  symbol: "USDC",
  decimals: 6,
  displayDecimals: 2,
  priceDisplayDecimals: 4,
  mgvTestToken: true,
} as const satisfies Token

const SEIWETH = {
  address: "0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8",
  symbol: "WETH",
  decimals: 18,
  displayDecimals: 2,
  priceDisplayDecimals: 4,
  mgvTestToken: true,
} as const satisfies Token

const SEIWBTC = {
  address: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
  symbol: "WBTC",
  decimals: 8,
  displayDecimals: 2,
  priceDisplayDecimals: 4,
  mgvTestToken: true,
} as const satisfies Token

export const seiWSEIUSDC = {
  base: SEIWSEI,
  quote: SEIUSDC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const seiWSEIWETH = {
  base: SEIWSEI,
  quote: SEIWETH,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const seiWSEIWBT = {
  base: SEIWSEI,
  quote: SEIWBTC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const seiMarkets = [
  seiWSEIUSDC,
  seiWSEIWETH,
  seiWSEIWBT,
] as const satisfies MarketParams[]

// MEGAETH TESTNET

const megaEthTestnetMangrove = {
  mgv: "0x32360BB61fcb9cDCDD44eD44328b848061c0b9D7",
  mgvOrder: "0x981Bd234dA6778a6d0132364AfB30f517a9F5aa8",
  mgvReader: "0xB5C0a4249ee477860D47aD688386F2427F0F072a",
  smartRouter: "0x5edE1DD8029e59a0eF80CEB0474B3E8322490220",
  routerProxyFactory: "0x9DB89FB4B356D480139792Fa2146A408f8944E3a",
} as const satisfies MangroveActionsDefaultParams

const megaEthTestnetWETH = {
  address: "0xeFf2212a720aD2a7660251a07cA3fF8512e3Ed6E",
  symbol: "WETH",
  decimals: 18,
  displayDecimals: 5,
  priceDisplayDecimals: 6,
  mgvTestToken: true,
} as const satisfies Token

const megaEthTestnetUSDC = {
  address: "0x33816848eD5002aC1a3B71bf40A4FEB0B3dC6828",
  symbol: "USDC",
  decimals: 6,
  displayDecimals: 2,
  priceDisplayDecimals: 4,
  mgvTestToken: true,
} as const satisfies Token

export const megaEthTestnetWETHUSDC = {
  base: megaEthTestnetWETH,
  quote: megaEthTestnetUSDC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const megaEthTestnetMarkets = [
  megaEthTestnetWETHUSDC,
] as const satisfies MarketParams[]

// Sepolia

export const sepoliaMangrove = {
  mgv: "0x37a471853A4313F4b679Ab701a224E8D73D70946",
  mgvOrder: "0x309A4e457adff1F05E32E3ad6f4B5213444C2B5c",
  mgvReader: "0xc3980eE418112A36991FAD4c6E6caBf7dFFea8a2",
  routerProxyFactory: "0x36961203E0D19357754A16963F31488D9EE8D9Ae",
  smartRouter: "0x6DeD903b3674b6798e03E6ef552eD4A3F93d7f63",
} as const satisfies MangroveActionsDefaultParams

const sepoliaWETH = {
  address: "0xAC394eB2014cF84d310EBA571e691b9Ea0808700",
  symbol: "WETH",
  decimals: 18,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

const sepoliaUSDC = {
  address: "0x4350Ad5B77835c0e671D3ee920aBe6fd82d1dC37",
  symbol: "USDC",
  decimals: 6,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

export const sepoliaWETHUSDC = {
  base: sepoliaWETH,
  quote: sepoliaUSDC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const sepoliaMarkets = [
  sepoliaWETHUSDC,
] as const satisfies MarketParams[]

// Eden

export const edenMangrove = {
  mgv: "0x9c7f89b2C425049Ca9Eb0513eF334f55BF7f64c9",
  mgvReader: "0x4350Ad5B77835c0e671D3ee920aBe6fd82d1dC37",
  mgvOrder: "0x3De1210EE7DCAae523c01c19685a91fD52585c38",
  routerProxyFactory: "0xF6DDc87f86fC40EC00b9136ab9b514e735E7620c",
  smartRouter: "0x9F47c6563c16111c944e8Fa7A7372C4F6c310a4c",
} as const satisfies MangroveActionsDefaultParams

const edenWETH = {
  address: "0xbA207113AAFbd1805786a953177eCdE780e5BbAB",
  symbol: "WETH",
  decimals: 18,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

const edenUSDC = {
  address: "0xF8e5aD1507f6b7e1637b4d20c115b470D48C582E",
  symbol: "USDC",
  decimals: 6,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

export const edenWETHUSDC = {
  base: edenWETH,
  quote: edenUSDC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const edenMarkets = [edenWETHUSDC] as const satisfies MarketParams[]

// Somnia
export const somniaMangrove = {
  mgv: "0x13d30dF7e872660fDd5293BEe39EBd7a61C4C622",
  mgvReader: "0xe3dbF8bAB1c5D4B3386Fc05e207Bd8f91552ACc0",
  mgvOrder: "0x6b3E0f24824be981e892ca719A16714bfd2D0Ac2",
  routerProxyFactory: "0xE82C7B1Cb8C59088Fe196E01746a930E2b168ee8",
  smartRouter: "0x94a07fb6e0d900c57b0a56cb30a5058aff7ddd6b",
} as const satisfies MangroveActionsDefaultParams

const somniaWETH = {
  address: "0x1098009Dd154092943e167536df2467479c6CBeE",
  symbol: "WETH",
  decimals: 18,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

const somniaUSDC = {
  address: "0x309A4e457adff1F05E32E3ad6f4B5213444C2B5c",
  symbol: "USDC",
  decimals: 6,
  displayDecimals: 3,
  priceDisplayDecimals: 4,
  mgvTestToken: false,
} as const satisfies Token

export const somniaWETHUSDC = {
  base: somniaWETH,
  quote: somniaUSDC,
  tickSpacing: 1n,
} as const satisfies MarketParams

export const somniaMarkets = [somniaWETHUSDC] as const satisfies MarketParams[]
