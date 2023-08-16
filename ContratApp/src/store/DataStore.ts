import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  userType: number;
}

const initialState: DataState = {
  userType: 0,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<number>) => {
      state.userType = action.payload;
    },
  },
});

export const {setUserType} = dataSlice.actions;

export default dataSlice.reducer;
