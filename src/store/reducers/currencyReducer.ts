import {
  FETCH_CURRENCY_SUCCESS
} from "store/actions/types";
import { CurrencyType } from "types/Currency";

const initialChatState = { currency: 1 };

export default function(
  state: CurrencyType = initialChatState,
  action: { type: string; payload?: any }
) {
  if (action.type === FETCH_CURRENCY_SUCCESS) {
    return { currency: action.payload };
  } else {
    return state;
  }
}
