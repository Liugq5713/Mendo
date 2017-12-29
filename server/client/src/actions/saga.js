import axios from "axios";
import { takeEvery } from "redux-saga";
import { put } from "redux-saga/effects";

export function* checkuser() {
  axios.get("/api/checkuser").then(res => console.log(res));
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* checkUserAsync() {
  yield* takeEvery("CHECK_USER", checkuser);
}
