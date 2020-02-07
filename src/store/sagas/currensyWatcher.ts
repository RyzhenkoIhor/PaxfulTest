import { takeEvery } from "redux-saga/effects";
import { FETCH_CURRENCY } from "../actions/types";
import currencyWorker from "./currencyWorker";

export default function*() {
  yield takeEvery(FETCH_CURRENCY, currencyWorker);
}
