import { configureStore } from '@reduxjs/toolkit';
import personsReducer from './personsSlice';
import projectsReducer from './projectsSlice';
import blogsReducer from './blogsSlice';
import { PersonType, ProjectType, BlogType } from '../types';

export type StoreType = {
  persons: PersonType[];
  projects: ProjectType[];
  blogs: BlogType[];
};

const store = configureStore({
  reducer: {
    persons: personsReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
