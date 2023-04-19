import { AuthrorizeUserActions, GetCurrentUserActions, LogoutActions, RegisterUserActions } from "../actions/auth.actions";
import { GetCurrentUserActionTypes, LogoutActionType } from "../actionTypes";

export interface UserState {
  data: any | null,
  error: string | null,
  loading: boolean,
}

export const initialState: UserState = {
  data: null,
  error: null,
  loading: false,
};

type UserActionTypes = AuthrorizeUserActions
| RegisterUserActions
| GetCurrentUserActions
| LogoutActions

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case GetCurrentUserActionTypes.GET_CURRENT_USER:
      return {
        ...state,
        loading: true,
      };
    case GetCurrentUserActionTypes.GET_CURRENT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GetCurrentUserActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LogoutActionType.LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
