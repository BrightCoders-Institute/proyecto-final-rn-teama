import {combineReducers} from '@reduxjs/toolkit';
import DataStore from './DataStore';

const rootReducer = combineReducers({
  data: DataStore,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
