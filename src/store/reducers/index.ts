import { combineReducers } from 'redux';

import userReducer from './user.reducer';

const root = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof root>;

export default root;