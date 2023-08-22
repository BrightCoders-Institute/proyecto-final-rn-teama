import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  userType: number;
  isLoggedIn: boolean;
  employEmail: string;
  employPassword: string;
  employPhone: string;
  employAddress: string;
  employTypeService: string;
  employDescription: string;
  employDaysWork: string;
  employTimeAM: string;
  employTimePM: string;
  employPriceMin: string;
  employPriceMax: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  companyName: string;
}

const initialState: DataState = {
  userType: 0,
  isLoggedIn: false,
  employEmail: '',
  employPassword: '',
  employPhone: '',
  employAddress: '',
  employTypeService: '',
  employDescription: '',
  employDaysWork: '',
  employTimeAM: '',
  employTimePM: '',
  employPriceMin: '',
  employPriceMax: '',
  email: '',
  password: '',
  address: '',
  phone: '',
  companyName: '',
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
    },
    setEmployEmail: (state, action: PayloadAction<string>) => {
      state.employEmail = action.payload;
    },
    setEmployPassword: (state, action: PayloadAction<string>) => {
      state.employPassword = action.payload;
    },
    setEmployPhone: (state, action: PayloadAction<string>) => {
      state.employPhone = action.payload;
    },
    setEmployAddress: (state, action: PayloadAction<string>) => {
      state.employAddress = action.payload;
    },
    setEmployTypeService: (state, action: PayloadAction<string>) => {
      state.employTypeService = action.payload;
    },
    setEmployDescription: (state, action: PayloadAction<string>) => {
      state.employDescription = action.payload;
    },
    setEmployDaysWork: (state, action: PayloadAction<string>) => {
      state.employDaysWork = action.payload;
    },
    setEmployTimeAM: (state, action: PayloadAction<string>) => {
      state.employTimeAM = action.payload;
    },
    setEmployTimePM: (state, action: PayloadAction<string>) => {
      state.employTimePM = action.payload;
    },
    setEmployPriceMin: (state, action: PayloadAction<string>) => {
      state.employPriceMin = action.payload;
    },
    setEmployPriceMax: (state, action: PayloadAction<string>) => {
      state.employPriceMax = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
  },
});

export const {
  setUserType, 
  setLoggedIn,
  setEmployEmail,
  setEmployPassword,
  setEmployPhone,
  setEmployAddress,
  setEmployTypeService,
  setEmployDescription,
  setEmployDaysWork,
  setEmployTimeAM,
  setEmployTimePM,
  setEmployPriceMin,
  setEmployPriceMax,
  setEmail,
  setPassword,
  setAddress,
  setPhone,
  setCompanyName,
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

export default dataSlice.reducer;
