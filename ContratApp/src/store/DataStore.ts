import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  userType: number;
  isLoggedIn: boolean;
}

const initialState: DataState = {
  userType: 0,
  isLoggedIn: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<number>) => {
      state.userType = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    }
  },
});

export const {setUserType, setLoggedIn} = dataSlice.actions;

export default dataSlice.reducer;
