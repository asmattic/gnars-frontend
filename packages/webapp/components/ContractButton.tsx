// @TODO Replace rainbowkit modal
// import { useConnectModal } from '@rainbow-me/rainbowkit'
import { Button, ButtonProps } from "@chakra-ui/react";
import { useBridgeModal } from "@hooks/useBridgeModal";
import { ConnectKitButton, useModal } from "connectkit";
import { useChainStore } from "stores/useChainStore";
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { CHAIN_ID } from "@constants/types";
interface ContractButtonProps extends ButtonProps {
  handleClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ContractButton = ({ children, handleClick, ...rest }: ContractButtonProps) => {
  const { address: userAddress } = useAccount();
  const { chain: userChain } = useNetwork();
  const appChain = useChainStore((x) => x.chain);
  const { canUserBridge, openBridgeModal } = useBridgeModal();
  const { data: userBalance } = useBalance({
    address: userAddress,
    chainId: CHAIN_ID.BASE// appChain.id
  });

  // TODO: useSwitchNetwork
  console.log('Contract Button: ', { userChain, appChain, canUserBridge, userAddress, userBalance });
  // const { openConnectModal } = useConnectModal()
  const { openConnectModal } = useModal();
  const { switchNetwork } = useSwitchNetwork();

  const handleSwitchNetwork = () => switchNetwork?.(appChain.id);

  const handleClickWithValidation = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!userAddress) return openConnectModal?.();
    if (canUserBridge && userBalance?.decimals === 0) return openBridgeModal();
    if (!userAddress) return;
    if (userChain?.id !== CHAIN_ID.BASE) return handleSwitchNetwork();
    handleClick(e);
  };

  return (
    <Button onClick={handleClickWithValidation} {...rest}>
      {children}
    </Button>
  );
};
