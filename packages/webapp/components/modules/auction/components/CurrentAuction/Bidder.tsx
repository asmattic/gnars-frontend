import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AccountAvatar } from "@components/AccountAvatar";
import { useEnsData } from "@hooks/useEnsData";
import { useNnsensReverseResolverResolve } from "@utils/sdk";
import { useNnsNameWithEnsFallback } from "@hooks/useNnsNameWithEnsFallback";

interface BidderProps {
  address: string;
}

export const Bidder: React.FC<BidderProps> = ({ address }) => {
  const { displayName, ensAvatar, ensNameLoading } = useNnsNameWithEnsFallback(address);

  return (
    <Flex align="center">
      <Box marginRight={"20px"}>
        <AccountAvatar address={address} avatarImg={ensAvatar ?? ""} isLoading={ensNameLoading} />
      </Box>
      <Text className={"recent-bidder"} variant="paragraph-md">
        {displayName}
      </Text>
    </Flex>
  );
};
