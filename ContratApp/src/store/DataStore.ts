import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  userType: number;
  isLoggedIn: boolean;
  employeeEmail: string;
  employeePassword: string;
  employeePhone: string;
  employeeAddress: string;
  employeeService: string;
  employeeDescription: string;
  employeeDaysWork: string;
  employeeTimeAM: string;
  employeeTimePM: string;
  employeePriceMin: string;
  employeePriceMax: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  companyName: string;
}

const initialState: DataState = {
  userType: 0,
  isLoggedIn: false,
  employeeEmail: '',
  employeePassword: '',
  employeePhone: '',
  employeeAddress: '',
  employeeService: '',
  employeeDescription: '',
  employeeDaysWork: '',
  employeeTimeAM: '',
  employeeTimePM: '',
  employeePriceMin: '',
  employeePriceMax: '',
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
    setEmployeeEmail: (state, action: PayloadAction<string>) => {
      state.employeeEmail = action.payload;
    },
    setEmployeePassword: (state, action: PayloadAction<string>) => {
      state.employeePassword = action.payload;
    },
    setEmployeePhone: (state, action: PayloadAction<string>) => {
      state.employeePhone = action.payload;
    },
    setEmployeeAddress: (state, action: PayloadAction<string>) => {
      state.employeeAddress = action.payload;
    },
    setEmployeeService: (state, action: PayloadAction<string>) => {
      state.employeeService = action.payload;
    },
    setEmployeeDescription: (state, action: PayloadAction<string>) => {
      state.employeeDescription = action.payload;
    },
    setEmployeeDaysWork: (state, action: PayloadAction<string>) => {
      state.employeeDaysWork = action.payload;
    },
    setEmployeeTimeAM: (state, action: PayloadAction<string>) => {
      state.employeeTimeAM = action.payload;
    },
    setEmployeeTimePM: (state, action: PayloadAction<string>) => {
      state.employeeTimePM = action.payload;
    },
    setEmployeePriceMin: (state, action: PayloadAction<string>) => {
      state.employeePriceMin = action.payload;
    },
    setEmployeePriceMax: (state, action: PayloadAction<string>) => {
      state.employeePriceMax = action.payload;
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
  setEmployeeEmail,
  setEmployeePassword,
  setEmployeePhone,
  setEmployeeAddress,
  setEmployeeService,
  setEmployeeDescription,
  setEmployeeDaysWork,
  setEmployeeTimeAM,
  setEmployeeTimePM,
  setEmployeePriceMin,
  setEmployeePriceMax,
  setEmail,
  setPassword,
  setAddress,
  setPhone,
  setCompanyName,
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

export default dataSlice.reducer;
