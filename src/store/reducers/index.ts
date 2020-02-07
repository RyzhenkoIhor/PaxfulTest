import { combineReducers } from "redux";

import ChatsReducer from "./chatsReducer";
import ChatReducer from "./chatReducer";
import UserReducer from "./userReducer";
import CurrencyReducer from "./currencyReducer";

import { ChatListItemType } from "types/Chats";
import { ChatType } from "types/Chat";
import { UserType } from "types/User";
import { CurrencyType } from "types/Currency";

export interface RootStore {
  chats: ChatListItemType[];
  chat: ChatType[];
  user: UserType;
  currency: CurrencyType;
}

const rootReducer = combineReducers({
  chats: ChatsReducer,
  chat: ChatReducer,
  user: UserReducer,
  currency: CurrencyReducer
});

export default rootReducer;
