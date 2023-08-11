import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {}

const initialState: DataState = {};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
