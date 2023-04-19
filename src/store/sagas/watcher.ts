import { all } from "redux-saga/effects";

import authorizationWatcher from "./auth.worker";

export default function* sagaWatcher() {
  yield all([
    authorizationWatcher(),
  ]);
}
