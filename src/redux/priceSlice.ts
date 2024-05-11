import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StoreType } from './store';
import { PriceType } from '../types';

const initialState: PriceType[] = [];

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<PriceType[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setPrice } = priceSlice.actions;
export const selectPrice = (state: StoreType) => state.price;
export default priceSlice.reducer;
