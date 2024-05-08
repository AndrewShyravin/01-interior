import { configureStore } from '@reduxjs/toolkit';
import personsReducer from './personsSlice';
import projectsReducer from './projectsSlice';
import blogsReducer from './blogsSlice';
import userReducer from './userSlice';
import teamReducer from './teamSlice';
import { contactsApi } from './contactsApi';
import {
  PersonType,
  ProjectType,
  BlogType,
  TeamType,
  UserType,
} from '../types';

export type StoreType = {
  persons: PersonType[];
  projects: ProjectType[];
  blogs: BlogType[];
  user: UserType;
  team: TeamType[];
};

const store = configureStore({
  reducer: {
    persons: personsReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    user: userReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    team: teamReducer,
  },
  middleware: (getDefaultMiddware) =>
    getDefaultMiddware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
