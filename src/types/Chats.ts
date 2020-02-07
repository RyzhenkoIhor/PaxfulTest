export interface ChatListItemType {
  id: number;
  sellerId: number;
  sellerAvatarUrl: string;
  paymentMethod: string;
  amountUSD: number;
  isUnread: boolean;
  isPayed: boolean;
  sellerName: string;
  dirtyBy: number | null;
  readBy: number | null;
  amountBTC: number;
  currency: number;
}