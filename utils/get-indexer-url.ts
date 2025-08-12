// utils/get-indexer-url.ts
import { Chain } from "viem"
import { arbitrum, base, megaethTestnet, sei, sepolia, somniaTestnet } from "viem/chains"

export function getIndexerUrl(chain?: Chain | null): string {
  switch (chain?.id) {
    case megaethTestnet.id:
      return "https://indexer-testnet.mgvinfra.com"
    case sei.id:
      return "https://indexer-sei.mgvinfra.com"
    case base.id:
      return "https://indexer.mgvinfra.com"
    case arbitrum.id:
      return "https://indexer-arbitrum.mgvinfra.com"
    case sepolia.id:
      return "https://mangrove-indexer-sepolia-production.up.railway.app"
    case somniaTestnet.id:
      return "https://mangrove-indexer-somnia-production.up.railway.app"
    default:
      return "https://indexer.mgvinfra.com"
  }
}
