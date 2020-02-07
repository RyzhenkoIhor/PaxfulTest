import { put, delay, call } from "redux-saga/effects";
import {
  fetchCurrencySuccess,
  fetchCurrency,
  fetchCurrencyFailure
} from "../actions";
import { fetchFromApi } from "./requests";

export default function* currencyWorker() {
  try {
    const response = yield call(fetchFromApi);
    yield put(fetchCurrencySuccess(response.data.bpi.USD.rate_float));
    yield delay(Math.floor(Math.random() * 4001)+1000);
    yield put(fetchCurrency());
  } catch (e) {
    yield put(fetchCurrencyFailure(e));
  }
}
