import { all } from 'redux-saga/effects'
import CurrencySaga from './currensyWatcher'

export default function* rootSaga() {
  yield all([
    CurrencySaga()
  ])
}
