import { put, delay, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCurrencySuccess,
  fetchCurrency,
  fetchCurrencyFailure
} from "../actions";

const url = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

function fetchFromApi() {
  return axios.get(url)
}

export default function* currencyWorker() {
  try {
    const response = yield call(fetchFromApi);
    yield put(fetchCurrencySuccess(response.data.bpi.USD.rate_float));
    yield delay(5000);
    yield put(fetchCurrency());
  } catch (e) {
    yield put(fetchCurrencyFailure(e));
  }
}
