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
  isPayed: boolean;
  sellerName: string;
  respectCount: number;
  disrespectCount: number;
  tradeHash: string;
  amountUSD: number;
  amountBTC: number;
  currency: number;
  messages: MessageType[]
}

