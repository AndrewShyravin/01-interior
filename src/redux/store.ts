import { configureStore } from '@reduxjs/toolkit';
import personsReducer from './personsSlice';
import projectsReducer from './projectsSlice';
import blogsReducer from './blogsSlice';
import userReducer from './userSlice';
import { PersonType, ProjectType, BlogType } from '../types';
import { UserType } from '../types/User';

export type StoreType = {
  persons: PersonType[];
  projects: ProjectType[];
  blogs: BlogType[];
  user: UserType;
};

const store = configureStore({
  reducer: {
    persons: personsReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
