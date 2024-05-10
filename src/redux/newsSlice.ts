import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NewsType } from '../types';
import { StoreType } from './store';

const initialState: NewsType[] = [];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsType[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setNews } = newsSlice.actions;
export const selectNews = (state: StoreType) => state.news;
export default newsSlice.reducer;
