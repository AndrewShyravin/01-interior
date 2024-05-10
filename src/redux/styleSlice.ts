import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StyleType } from '../types';
import { StoreType } from './store';

const initialState: StyleType[] = [];

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<StyleType[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setStyle } = styleSlice.actions;
export const selectStyle = (state: StoreType) => state.style;
export default styleSlice.reducer;
