import { createSlice } from '@reduxjs/toolkit';
import { BlogType } from '../types';
import { StoreType } from './store';

const initialState: BlogType[] = [];

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setBlogs } = blogsSlice.actions;
export const selectBlogs = (state: StoreType) => state.blogs;
export default blogsSlice.reducer;
