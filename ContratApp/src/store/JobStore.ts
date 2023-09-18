import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JobState {
    userId: string;
    title: string;
    budget: number;
    finishDate: string;
    serviceType: string;
    description: string;
}

const initialState: JobState = {
    userId: '',
    title: '',
    budget: 0,
    finishDate: '',
    serviceType: '',
    description: '',
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setBudget: (state, action: PayloadAction<number>) => {
            state.budget = action.payload;
        },
        setFinishDate: (state, action: PayloadAction<string>) => {
            state.finishDate = action.payload;
        },
        setSeviceType: (state, action: PayloadAction<string>) => {
            state.serviceType = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
    },
});

export const {
    setUserId,
    setTitle,
    setBudget,
    setFinishDate,
    setSeviceType,
    setDescription
} = jobSlice.actions;

export const dataReducer = jobSlice.reducer;

export default jobSlice.reducer;
