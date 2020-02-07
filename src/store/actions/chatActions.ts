import {
  SEND_MESSAGE,
  READ_MESSAGE,
  DELETE_CHAT,
  RELEASE_BTC
} from "store/actions/types";

import { MessageType } from "types/Chats";

export function sendMessage(id: number, message: MessageType) {
  return {
    type: SEND_MESSAGE,
    payload: { id, message: message }
  };
}

export function readMessages(chatId: number, userId: number) {
  return {
    type: READ_MESSAGE,
    payload: { chatId: chatId, userId: userId }
  };
}

export function deleteChat(id: number) {
  return {
    type: typeof DELETE_CHAT,
    payload: id
  };
}

export function releaseBTC(id: number) {
  return {
    type: RELEASE_BTC,
    payload: id
  };
}
