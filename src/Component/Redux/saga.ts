import { Alert } from "react-native";
import { put, takeEvery, call } from "redux-saga/effects";
import { Show_User_List, Set_User_List } from "./constants";

function* helper(): any {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // const response = yield call(fetch, url, { method: "GET" });
    const response=yield fetch(url, { method: "GET" })
    const data = yield response.json();
    Alert.alert("Data fetched", JSON.stringify(data));
    yield put({
      type: Set_User_List,
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching user list:", error);
  }
}

export default function* saga() {
  yield takeEvery(Show_User_List, helper);
}