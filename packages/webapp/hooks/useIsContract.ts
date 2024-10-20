import { CHAIN_IDS } from "@constants/networkConfig";
import { useQuery } from "@tanstack/react-query";
import { AddressType, CHAIN_ID } from "@constants/types";
// import useSWRImmutable from "swr/immutable";
import { getProvider } from "utils/provider";


// React Query refactor
export const useIsContract = ({ address, chainId = CHAIN_ID.BASE }: { address?: AddressType; chainId?: CHAIN_ID }) => {
  return useQuery(
    ["isContract", address, chainId], // Unique key for this query
    async () => {
      if (!address) {
        console.log(`hooks/useIsContract.ts => NO address `, { address, chainId });
        return false; // Return early if no address is provided
      }
      const provider = getProvider(chainId);
      const bytecode = await provider.getBytecode({ address });
      return bytecode !== "0x"; // Return true if bytecode exists (it's a contract), otherwise false
    },
    {
      enabled: !!address, // Prevents the query from running if no address is provided
      staleTime: Infinity, // Cache results indefinitely (immutable)
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    }
  );
};
