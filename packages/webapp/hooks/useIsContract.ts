import { CHAIN_IDS } from "@constants/networkConfig";
import { AddressType, CHAIN_ID } from "@constants/types";
import useSWRImmutable from "swr/immutable";
import { getProvider } from "utils/provider";

export const useIsContract = ({ address, chainId = CHAIN_ID.BASE }: { address?: AddressType; chainId?: CHAIN_ID }) => {
  return useSWRImmutable(address ? [address, chainId] : undefined, async ([address, chainId]) => {
    const provider = getProvider(chainId);
    return provider.getBytecode({ address }).then((x) => x !== "0x");
  });
};
