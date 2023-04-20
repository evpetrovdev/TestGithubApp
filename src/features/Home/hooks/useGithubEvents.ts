import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {AxiosError} from 'axios';
import {useAppDispatch, useAppSelector} from '../../../common/hooks/reduxHooks';
import {selectEvents} from '../../../redux/reducers/eventsReducer/eventsSelectors';
import {getEvents} from '../../../redux/reducers/eventsReducer/eventsThunks';
import useIntervalFetch from './useIntervalCallback';

const eventsPerBatch = 25;
const batchInterval = 30 * 1000;

const useGithubEvents = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState('');

  const events = useAppSelector(selectEvents);
  const dispatch = useAppDispatch();

  const fetchEvents = useCallback(async () => {
    try {
      const response = await dispatch(
        getEvents({
          page: 1,
          perPage: eventsPerBatch,
        }),
      );
      console.log('Loaded data: ', response.payload);
    } catch (e) {
      console.log(e);
      setError((e as AxiosError).message);
    }
  }, []);

  const {intervaledCallback: intervaledFetch, cleanInterval} = useIntervalFetch(
    fetchEvents,
    batchInterval,
  );

  const refreshEvents = async () => {
    setIsRefreshing(true);
    await intervaledFetch();
    setIsRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      refreshEvents();

      return () => cleanInterval();
    }, []),
  );

  return {
    isRefreshing,
    error,
    events,

    refreshEvents,
    cleanInterval,
  };
};

export default useGithubEvents;
