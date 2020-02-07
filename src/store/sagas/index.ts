import { all } from 'redux-saga/effects'
import currencySaga from './currensyWatcher'

export default function* rootSaga() {
  yield all([
    currencySaga()
  ])
}
