import { combineReducers } from '@reduxjs/toolkit';
import DataStore from './DataStore';
import JobStore from './JobStore';

const rootReducer = combineReducers({
  data: DataStore,
  job: JobStore
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
