import {IEvent} from '../types';

export type StackParamList = {
  EventsList: undefined;
  EventDetails: {
    avatarUrl: string;
    login: string;
    orgLogin?: string;
    orgUrl?: string;
    eventType: string;
  };
};
