import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import personsReducer from './personsSlice';
import projectsReducer from './projectsSlice';
import blogsReducer from './blogsSlice';
import userReducer from './userSlice';
import teamReducer from './teamSlice';
import styleReducer from './styleSlice';
import newsReducer from './newsSlice';
import priceReducer from './priceSlice';
import errorReducer from './errorSlice';
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
  ErrorType,
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
  error: ErrorType;
};

const rootReducer = combineReducers({
  persons: personsReducer,
  projects: projectsReducer,
  blogs: blogsReducer,
  user: userReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  team: teamReducer,
  style: styleReducer,
  news: newsReducer,
  price: priceReducer,
  error: errorReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [contactsApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
