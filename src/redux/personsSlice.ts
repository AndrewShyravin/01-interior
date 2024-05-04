import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonType } from '../types';
import { StoreType } from './store';

const initialState: PersonType[] = [];

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPersons: (state, action: PayloadAction<PersonType[]>) => {
      state = action.payload;
    },
  },
});

export const { setPersons } = personsSlice.actions;
export const selectPersons = (state: StoreType) => state.persons;
export default personsSlice.reducer;
