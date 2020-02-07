import {
  FETCH_CURRENCY,
  FETCH_CURRENCY_FAILURE,
  FETCH_CURRENCY_SUCCESS
} from "./types";

export function fetchCurrency() {
  return {
    type: FETCH_CURRENCY,
    payload: null
  };
}

export function fetchCurrencySuccess(currency: number) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: currency
  };
}

export function fetchCurrencyFailure(error: string) {
  return {
    type: FETCH_CURRENCY_FAILURE,
    payload: error
  };
}
