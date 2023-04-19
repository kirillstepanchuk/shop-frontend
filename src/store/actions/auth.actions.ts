import { AnyNaptrRecord } from 'dns';
import { AuthorizeActionTypes, GetCurrentUserActionTypes, LogoutActionType, RegisterActionTypes } from '../actionTypes';

// Login user
export interface AuthrorizeUserAction {
  type: AuthorizeActionTypes.AUTHORIZE_USER,
  payload: any,
}
interface AuthrorizeUserSuccessAction {
  type: AuthorizeActionTypes.AUTHORIZE_USER_SUCCESS,
  payload: any,
}
interface AuthrorizeUserErrorAction {
  type: AuthorizeActionTypes.AUTHORIZE_USER_ERROR,
  payload: string,
}
export type AuthrorizeUserActions =
  AuthrorizeUserAction | AuthrorizeUserSuccessAction | AuthrorizeUserErrorAction;

// Register user
export interface RegisterUserAction {
  type: RegisterActionTypes.REGISTER_USER,
  payload: any,
}
interface RegisterUserSuccessAction {
  type: RegisterActionTypes.REGISTER_USER_SUCCESS,
  payload: any,
}
interface RegisterUserFailedAction {
  type: RegisterActionTypes.REGISTER_USER_ERROR,
  payload: string,
}
export type RegisterUserActions =
  RegisterUserAction | RegisterUserSuccessAction | RegisterUserFailedAction;

// Logout user
export interface LogoutAction {
  type: LogoutActionType.LOGOUT_USER,
}

export type LogoutActions = LogoutAction;

// Get user
export interface GetCurrentUserAction {
  type: GetCurrentUserActionTypes.GET_CURRENT_USER,
}
interface GetCurrentUserSuccessAction {
  type: GetCurrentUserActionTypes.GET_CURRENT_USER_SUCCESS,
  payload: any | null,
}
interface GetCurrentUserFailedAction {
  type: GetCurrentUserActionTypes.GET_CURRENT_USER_ERROR,
  payload: string,
}
export type GetCurrentUserActions =
  GetCurrentUserAction | GetCurrentUserSuccessAction | GetCurrentUserFailedAction;

// Login
export const loginUser = (user: any): AuthrorizeUserAction => ({
  type: AuthorizeActionTypes.AUTHORIZE_USER,
  payload: user,
});
export const loginUserError = (error: string): AuthrorizeUserErrorAction => ({
  type: AuthorizeActionTypes.AUTHORIZE_USER_ERROR,
  payload: error,
});
export const loginUserSuccess = (data: any): AuthrorizeUserSuccessAction => ({
  type: AuthorizeActionTypes.AUTHORIZE_USER_SUCCESS,
  payload: data,
});

// Register
export const signupUser = (user: AnyNaptrRecord): RegisterUserAction => ({
  type: RegisterActionTypes.REGISTER_USER,
  payload: user,
});
export const signupUserError = (error: string): RegisterUserFailedAction => ({
  type: RegisterActionTypes.REGISTER_USER_ERROR,
  payload: error,
});
export const signupUserSuccess = (data: any): RegisterUserSuccessAction => ({
  type: RegisterActionTypes.REGISTER_USER_SUCCESS,
  payload: data,
});

// Logout
export const logoutUser = (): LogoutAction => ({
  type: LogoutActionType.LOGOUT_USER,
});

// Get user
export const getCurrentUser = (): GetCurrentUserAction => ({
  type: GetCurrentUserActionTypes.GET_CURRENT_USER,
});
export const getCurrentUserSuccess = (user: any | null): GetCurrentUserSuccessAction => ({
  type: GetCurrentUserActionTypes.GET_CURRENT_USER_SUCCESS,
  payload: user,
});
export const getCurrentUserFailed = (error: string): GetCurrentUserFailedAction => ({
  type: GetCurrentUserActionTypes.GET_CURRENT_USER_ERROR,
  payload: error,
});
