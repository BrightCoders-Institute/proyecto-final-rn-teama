import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  userType: number;
  isLoggedIn: boolean;
  employeeName: string;
  employeeEmail: string;
  employeePassword: string;
  employeePhone: string;
  employeeAddress: string;
  employeeService: string;
  employeeDescription: string;
  employeeDaysWork: string;
  employeeLocation: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  companyName: string;
  hasJob: boolean;
}

const initialState: DataState = {
  userType: 0,
  isLoggedIn: false,
  employeeName: '',
  employeeEmail: '',
  employeePassword: '',
  employeePhone: '',
  employeeAddress: '',
  employeeService: '',
  employeeDescription: '',
  employeeLocation: '',
  employeeDaysWork: '',
  email: '',
  password: '',
  address: '',
  phone: '',
  companyName: '',
  hasJob: false
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
    setHasJob: (state, action: PayloadAction<boolean>) => {
      state.hasJob = action.payload;
    },
    setEmployeeName: (state, action: PayloadAction<string>) => {
      state.employeeName = action.payload;
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
    setEmployeeLocation: (state, action: PayloadAction<string>) => {
      state.employeeLocation = action.payload;
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
  setEmployeeName,
  setEmployeeEmail,
  setEmployeePassword,
  setEmployeePhone,
  setEmployeeAddress,
  setEmployeeService,
  setEmployeeDescription,
  setEmployeeLocation,
  setEmployeeDaysWork,
  setEmail,
  setPassword,
  setAddress,
  setPhone,
  setCompanyName,
  setHasJob
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;

export default dataSlice.reducer;
