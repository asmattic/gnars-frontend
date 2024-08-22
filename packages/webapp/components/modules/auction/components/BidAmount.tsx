import { AuctionDetail } from "./AuctionDetail";
import { formatCryptoVal } from "@utils/numbers";

export const BidAmount = ({ isOver, bid }: { isOver: boolean; bid?: number | string }) => (
  <AuctionDetail title={isOver ? "Winning bid" : "Current bid"}>
    {!!bid || (bid === 0 && !isOver) ? `${formatCryptoVal(bid)} ETH` : "n/a"}
  </AuctionDetail>
);
