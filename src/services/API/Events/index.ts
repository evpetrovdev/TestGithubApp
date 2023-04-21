import axios from 'axios';
import {EventsQueries, IEvent} from '../../../models/types';

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

class EventsAPI {
  static getEvents = async ({perPage, page}: EventsQueries) => {
    const response = await instance.get<IEvent[]>(
      `events?per_page=${perPage}&page=${page}`,
    );

    return response.data;
  };
}

export default EventsAPI;
