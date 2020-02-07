export interface MessageType {
  text: string;
  timestamp: number;
  senderId: number;
}

export interface ChatType {
  id: number;
  sellerId: number;
  sellerAvatarUrl: string;
  userAvatarUrl: string;
  paymentMethod: string;
  amountUSD: number;
  isUnread: boolean;
  isPayed: boolean;
  sellerName: string;
  dirtyBy: number | null;
  readBy: number | null;
  amountBTC: number;
  currency: number;
  respectCount: number;
  disrespectCount: number;
  tradeHash: string;
  messages: MessageType[];
}
