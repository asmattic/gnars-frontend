import { PUBLIC_ALL_CHAINS } from "constants/defaultChains";
import { RPC_URL } from "constants/rpc";
import { CHAIN_ID } from "constants/types";
import { PublicClient, createPublicClient, http } from "viem";

let providerMap: Map<CHAIN_ID, PublicClient>;

export function getProvider(chainId: CHAIN_ID): PublicClient {
  if (!providerMap) providerMap = new Map();
  if (!providerMap.has(chainId)) {
    // Use static provider to prevent re-querying for chain id since this won't change
    providerMap.set(
      chainId,
      createPublicClient({
        chain: PUBLIC_ALL_CHAINS.find((x) => x.id === chainId),
        transport: http(RPC_URL[chainId])
      })
    );
  }
  return providerMap.get(chainId)!;
}