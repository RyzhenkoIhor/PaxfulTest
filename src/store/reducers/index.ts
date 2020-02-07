import { combineReducers } from "redux";

import chatsReducer from "./chatsReducer";
import userReducer from "./userReducer";
import currencyReducer from "./currencyReducer";

import { ChatType } from "types/Chats";
import { UserType } from "types/User";
import { CurrencyType } from "types/Currency";

export interface RootStore {
  chats: ChatType[];
  user: UserType;
  currency: CurrencyType;
}

const rootReducer = combineReducers({
  chats: chatsReducer,
  user: userReducer,
  currency: currencyReducer
});

export default rootReducer;
