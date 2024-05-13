import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StoreType } from './store';
import { ErrorType } from '../types';

const initialState: ErrorType = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorType>) => {
      return action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export const selectError = (state: StoreType) => state.error;
export default errorSlice.reducer;
