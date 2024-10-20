import { CHAIN_ID } from "@constants/types";
import { BaseSDK } from "@queries/resolvers";
import { Auction_OrderBy, OrderDirection } from "@subgraph-generated/base";
import { Address } from "viem";

export const averageWinningBid = async (tokenAddress: Address) => {
  if (!tokenAddress) {
    console.log(`queries/base/requests/averageWinningBid.ts => [no averageWinningBidTokenAddress]`, { tokenAddress });
    tokenAddress = "0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17";
  }

  const history = await BaseSDK.connect().auctionHistory({
    daoId: tokenAddress ?? String(tokenAddress),
    startTime: 0,
    orderBy: Auction_OrderBy.EndTime,
    orderDirection: OrderDirection.Desc,
    first: 50
  });

  console.log(`queries/base/requests/averageWinningBid.ts => tokenAddress, history`, { tokenAddress, history });
  /* useEffect(() => {
     console.log(`queries/base/requests/averageWinningBid.ts => tokenAddress, history`, { tokenAddress });
   }, [tokenAddress, history]);
 */

  const nonZeroAuctions = history.dao?.auctions.filter(
    (x) => x.winningBid?.amount && BigInt(x.winningBid?.amount) > 0n
  );

  if (!nonZeroAuctions?.length) return BigInt(0);

  const auctionSum =
    nonZeroAuctions
      .map((x) => BigInt(x.winningBid?.amount || 0))
      .reduce((acc, bid) => {
        return acc + bid;
      }) || 0n;

  return auctionSum / BigInt(nonZeroAuctions.length);
};
