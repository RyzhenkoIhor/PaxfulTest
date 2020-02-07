import {
  SEND_MESSAGE,
  DELETE_CHAT,
  RELEASE_BTC,
  FETCH_CURRENCY,
  SWITCH_USER,
  READ_MESSAGE,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE
} from "store/actions/types";

import { MessageType } from "types/Chat";

export function deleteChat(id: number) {
  return {
    type: typeof DELETE_CHAT,
    payload: id
  };
}

export function sendMessage(id: number, message: MessageType) {
  return {
    type: SEND_MESSAGE,
    payload: { id, message: message }
  };
}

export function releaseBTC(id: number) {
  return {
    type: RELEASE_BTC,
    payload: id
  };
}

export function switchUser(id: number) {
  return {
    type: SWITCH_USER,
    payload: id
  };
}

export function readMessages(chatId: number, userId: number) {
  return {
    type: READ_MESSAGE,
    payload: { chatId: chatId, userId: userId }
  };
}

export function fetchCurrency() {
  return {
    type: FETCH_CURRENCY,
    payload: null
  }
}

export function fetchCurrencySuccess (currency : number) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: currency
  }
}

export function fetchCurrencyFailure (error : string) {
  return {
    type: FETCH_CURRENCY_FAILURE,
    payload: error
  }
}