import { createSlice } from '@reduxjs/toolkit';
import { ProjectType } from '../types';
import { StoreType } from './store';

const initialState: ProjectType[] = [];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setProjects } = projectsSlice.actions;
export const selectProjects = (state: StoreType) => state.projects;
export default projectsSlice.reducer;
