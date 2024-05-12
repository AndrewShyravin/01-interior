import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectType } from '../types';
import { StoreType } from './store';

const initialState: ProjectType[] = [];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<ProjectType[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setProjects } = projectsSlice.actions;
export const selectProjects = (state: StoreType) => state.projects;
export default projectsSlice.reducer;
