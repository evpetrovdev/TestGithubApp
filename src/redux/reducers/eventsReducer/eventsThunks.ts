import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {EventsQueries} from '../../../models/types';
import EventsAPI from '../../../services/API/Events';
import {EventsInitialStateType} from './eventsReducer';

export const getEvents = createAsyncThunk<
  EventsInitialStateType,
  EventsQueries,
  {rejectValue: string}
>('app/initializeApp', async (queries, thunkAPI) => {
  try {
    const events = await EventsAPI.getEvents(queries);

    return {events};
  } catch (e) {
    return thunkAPI.rejectWithValue((e as AxiosError).message);
  }
});
