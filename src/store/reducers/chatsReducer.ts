import {
  DELETE_CHAT,
  READ_MESSAGE,
  RELEASE_BTC,
  SEND_MESSAGE,
  SWITCH_USER
} from "../actions/types";
import { ChatType } from "types/Chats";
import { generatedState } from "./initStateGenerators/chatsStateGenerator";

const initialState = generatedState();

export default function(
  state: ChatType[] = initialState,
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
            messages: [...chat.messages, action.payload.message],
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
