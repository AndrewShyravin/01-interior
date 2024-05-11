import { configureStore } from '@reduxjs/toolkit';
import personsReducer from './personsSlice';
import projectsReducer from './projectsSlice';
import blogsReducer from './blogsSlice';
import userReducer from './userSlice';
import teamReducer from './teamSlice';
import styleReducer from './styleSlice';
import newsReducer from './newsSlice';
import priceReducer from './priceSlice';
import { contactsApi } from './contactsApi';
import {
  PersonType,
  ProjectType,
  BlogType,
  TeamType,
  UserType,
  StyleType,
  NewsType,
  PriceType,
} from '../types';

export type StoreType = {
  persons: PersonType[];
  projects: ProjectType[];
  blogs: BlogType[];
  user: UserType;
  team: TeamType[];
  style: StyleType[];
  news: NewsType[];
  price: PriceType[];
};

const store = configureStore({
  reducer: {
    persons: personsReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    user: userReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    team: teamReducer,
    style: styleReducer,
    news: newsReducer,
    price: priceReducer,
  },
  middleware: (getDefaultMiddware) =>
    getDefaultMiddware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
