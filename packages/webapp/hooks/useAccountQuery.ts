import { useNnsNameWithEnsFallback } from "@hooks/useNnsNameWithEnsFallback";
import { Address } from "abitype";
import { isValidName } from "@utils/ensUtils";
import { isAddress } from "viem";
import { useEnsAddress, useEnsAvatar } from "wagmi";
import { useEffect } from "react";

export interface Account {
  address?: Address;
  nnsOrEnsName?: string;
  ensAvatar?: string;
  isLoading: boolean;
  isValid?: boolean;
}

export const useAccountQuery = (addressOrEnsDomain?: string): Account => {
  console.log(`hooks/useAccountQuery.ts `, addressOrEnsDomain);
  const isValid = addressOrEnsDomain ? isAddress(addressOrEnsDomain) || isValidName(addressOrEnsDomain) : undefined;
  if (!isValid) {
    console.error(`hooks/useAccountQuery.ts: => `, { addressOrEnsDomain, isValid });

  }
  const { data: ensAddress, isLoading: isLoadingEnsAddress } = useEnsAddress({
    name: isValidName(addressOrEnsDomain ?? "") ? addressOrEnsDomain : undefined
  });

  const address = addressOrEnsDomain
    ? isAddress(addressOrEnsDomain)
      ? addressOrEnsDomain
      : (ensAddress ?? undefined)
    : undefined;

  const { data: nnsOrEnsName, isLoading: isLoadingNnsOrEnsName, isError: isNnsNameWithEnsFallbackError } = useNnsNameWithEnsFallback(address);

  useEffect(() => {
    console.log(`/hooks/useAccountQuery.ts => `, { isNnsNameWithEnsFallbackError, nnsOrEnsName, isLoadingNnsOrEnsName, addressOrEnsDomain, ensAddress, address });
  }, [isNnsNameWithEnsFallbackError, nnsOrEnsName, isLoadingNnsOrEnsName, addressOrEnsDomain, ensAddress, address]);

  const { data: ensAvatar, isLoading: isLoadingEnsAvatar } = useEnsAvatar({
    name: String(nnsOrEnsName)
  });
  return {
    address,
    nnsOrEnsName: String(nnsOrEnsName) ?? undefined,
    ensAvatar: ensAvatar ?? undefined,
    isLoading: isLoadingEnsAddress || isLoadingEnsAvatar || isLoadingNnsOrEnsName,
    isValid
  };
};
