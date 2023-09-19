import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JobState {
    title: string;
    budget: string;
    limitDate: string;
    jobType: string;
    description: string;
    location: string;
}

const initialState: JobState = {
    title: '',
    budget: '',
    limitDate: '',
    jobType: '',
    description: '',
    location: ''
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setBudget: (state, action: PayloadAction<string>) => {
            state.budget = action.payload;
        },
        setlimitDate: (state, action: PayloadAction<string>) => {
            state.limitDate = action.payload;
        },
        setJobType: (state, action: PayloadAction<string>) => {
            state.jobType = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
    },
});

export const {
    setTitle,
    setBudget,
    setlimitDate,
    setJobType,
    setDescription,
    setLocation
} = jobSlice.actions;

export const dataReducer = jobSlice.reducer;

export default jobSlice.reducer;
