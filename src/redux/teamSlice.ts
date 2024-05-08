import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TeamType } from '../types';
import { StoreType } from './store';

const initialState: TeamType[] = [];

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeam: (state, action: PayloadAction<TeamType[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setTeam } = teamSlice.actions;
export const selectTeam = (state: StoreType) => state.team;
export default teamSlice.reducer;
