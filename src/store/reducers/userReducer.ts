import { SWITCH_USER } from "store/actions/types";
import { UserType } from "types/User";

const initialChatState = { id: 0, name: 'Harry'};

export default function(
  state: UserType = initialChatState,
  action: { type: string; payload?: any }
) {
  if (action.type === SWITCH_USER) {
    return { ...state, id: state.id === 0 ? 1 : 0 };
  } else {
    return state;
  }
}
