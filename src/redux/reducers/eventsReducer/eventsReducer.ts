import {createSlice} from '@reduxjs/toolkit';
import {IEvent} from '../../../models/types';
import {getEvents} from './eventsThunks';

export const eventsInitialState = {
  events: null as IEvent[] | null,
};
export type EventsInitialStateType = typeof eventsInitialState;

export const eventsSlice = createSlice({
  name: 'app',
  initialState: eventsInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEvents.fulfilled, (state, {payload}) => {
      state.events = payload.events;
    });
    builder.addCase(getEvents.rejected, (state, {payload}) => {
      throw new Error(payload);
    });
  },
});

export const appActionCreators = eventsSlice.actions;
export default eventsSlice.reducer;
