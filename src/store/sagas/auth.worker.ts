import { SagaIterator } from "redux-saga";
import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchAuthorization, fetchRegistration } from "../../api/auth.api";
import { COOKIES } from "../../constants";
import { deleteCookie } from "../../utils/cookiesUtils";
import { loginUserError, loginUserSuccess, signupUserError, signupUserSuccess } from "../actions/auth.actions";
import { AuthorizeActionTypes, LogoutActionType, RegisterActionTypes } from "../actionTypes";

const deleteUserCookies = () => {
  deleteCookie(COOKIES.user);
  deleteCookie(COOKIES.token);
};

export function* authorizeUser(action: any): SagaIterator<void> {
  try {
    const data: any = yield call(
      fetchAuthorization,
      action.payload,
    );

    yield put(loginUserSuccess(data));
    // yield call(setCookie, COOKIES.user, data.userId);
    // yield call(setCookie, COOKIES.token, data.token);
    // yield put(push(ROUTE_PAGES.main));
  } catch (e: unknown) {
    yield put(loginUserError(String(e)));
  }
}

export function* registerUser(action: any): SagaIterator<void> {
  try {
    const data: any = yield call(fetchRegistration, action.payload);
    yield put(signupUserSuccess(data));
    // yield put(push(ROUTE_PAGES.checkEmail));
  } catch (e: unknown) {
    yield put(signupUserError(String(e)));
  }
}

export function* logoutUser(): SagaIterator<void> {
  yield call(deleteUserCookies);
  // yield put(push(ROUTE_PAGES.main));
}

export default function* authorizationWatcher() {
  yield takeEvery(LogoutActionType.LOGOUT_USER, logoutUser);
  yield takeEvery(AuthorizeActionTypes.AUTHORIZE_USER, authorizeUser);
  yield takeEvery(RegisterActionTypes.REGISTER_USER, registerUser);
}
