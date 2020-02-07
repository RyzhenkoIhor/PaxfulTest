import { SWITCH_USER } from "./types";

export function switchUser(id: number) {
  return {
    type: SWITCH_USER,
    payload: id
  };
}
