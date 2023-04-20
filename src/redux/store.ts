import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import eventsReducer from './reducers/eventsReducer/eventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>;
