import {AppStateType} from '../../store';

export const selectEvents = (state: AppStateType) => state.events.events;
