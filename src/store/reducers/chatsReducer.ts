import {
  DELETE_CHAT,
  READ_MESSAGE,
  RELEASE_BTC,
  SEND_MESSAGE,
  SWITCH_USER
} from "../actions/types";
import { ChatListItemType } from "types/Chats";

const generatedState = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push({
      id: i,
      sellerId: 1,
      sellerName: "Aron",
      sellerAvatarUrl:
        "https://i1.wp.com/lccbrevard.org/wp-content/uploads/2018/12/Empty-Profile-Photo.png?fit=300%2C300&ssl=1",
      paymentMethod: i % 2 ? "PayPal" : "Amazon Gift Card",
      amountUSD: 15 * i + 1,
      isUnread: !!(i % 2),
      isPayed: !(i % 2),
      dirtyBy: null,
      readBy: null,
      amountBTC: 0,
      currency: 0,
    });
  }
  return result;
};

const initialState = generatedState();

export default function(
  state: ChatListItemType[] = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case DELETE_CHAT:
      return state.filter(chat => chat.id !== action.payload);
    case READ_MESSAGE:
      return state.map(chat => {
        if (chat.id === action.payload.chatId) {
          return { ...chat, isUnread: false, readBy: action.payload.userId };
        }
        return chat;
      });
    case RELEASE_BTC:
      return state.map(chat => {
        if (chat.id === action.payload) {
          return {
            ...chat,
            isPayed: true
          };
        }
        return chat;
      });
    case SEND_MESSAGE:
      return state.map(chat => {
        if (chat.id === action.payload.id) {
          return {
            ...chat,
            dirtyBy: action.payload.message.senderId
          };
        }
        return chat;
      });
    case SWITCH_USER:
      return state.map(chat => {
        if (chat.dirtyBy === action.payload) {
          return {
            ...chat,
            dirtyBy:
              chat.readBy && chat.readBy !== chat.dirtyBy ? null : chat.dirtyBy,
            isUnread: true
          };
        }

        if (chat.readBy !== action.payload) {
          return {
            ...chat,
            isUnread: false
          };
        }
        return chat;
      });
    default:
      return state;
  }
}
