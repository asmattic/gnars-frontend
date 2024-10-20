import { CHAIN_ID } from "@constants/types";
import { walletSnippet } from "@utils/helpers";
import { useEffect } from "react";
import { useEnsAddress, useEnsAvatar, useEnsName } from "wagmi";

export const useEnsData = (address?: string) => {
  const { data: ensName, isLoading: ensNameLoading, isError: isEnsNameError } = useEnsName({
    address: address as `0x${string}`,
    chainId: CHAIN_ID.BASE
  });

  const { data: ensAvatar, isSuccess: isEnsAvatarSuccess, isError: isEnsAvatarError, isLoading: isEnsAvatarLoading } = useEnsAvatar({
    name: ensName,
    chainId: CHAIN_ID.BASE
  });

  const { data: ensAddress, isSuccess: isEnsAddressSuccess, isError: isEnsAddressError, isLoading: isEnsAddressLoading } = useEnsAddress({
    name: address,
    chainId: CHAIN_ID.BASE
  });

  useEffect(() => {
    console.log(`hooks/useEnsData.ts => `, { isEnsAddressError, isEnsAddressLoading, isEnsAddressSuccess, ensAddress, ensAvatar, address, ensName, ensNameLoading, isEnsNameError });
  }, [isEnsAddressError, isEnsAddressLoading, isEnsAddressSuccess, ensAddress, ensAvatar, address, ensName, ensNameLoading, isEnsNameError]);

  if (isEnsAddressError || isEnsAvatarError || isEnsNameError) {
    console.error(`hooks/useEnsData.ts ERROR: => `, { isEnsAddressError, isEnsAvatarError, isEnsNameError }, `\n address prop: ${address}`);
  }
  return {
    ensName,
    ensNameLoading,
    ensAvatar,
    ethAddress: ensAddress,
    displayName: ensName || walletSnippet(address)
  };
};
