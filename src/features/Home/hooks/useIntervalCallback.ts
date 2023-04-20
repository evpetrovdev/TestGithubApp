import {useRef} from 'react';

const useIntervalFetch = <T extends (...args: any[]) => any>(
  callback: T,
  ms: number,
): {
  intervaledCallback: (...funcArgs: Parameters<T>) => ReturnType<T>;
  cleanInterval: () => void;
} => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanInterval = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  return {
    intervaledCallback: (...args) => {
      cleanInterval();

      timer.current = setInterval(() => {
        callback();
      }, ms);

      const results = callback(...args);
      return results;
    },
    cleanInterval,
  };
};

export default useIntervalFetch;
