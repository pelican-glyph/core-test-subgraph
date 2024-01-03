import { Transfer as TransferEvent } from "../generated/USDT/ERC20";
import { Transfer } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  transfer.transactionHash = event.transaction.hash;
  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.amount = event.params.value;
  transfer.timestamp = event.block.timestamp;
  transfer.block = event.block.number;
  transfer.save();
}
