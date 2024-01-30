import type { Dispatch, SetStateAction } from 'react';

import { useCallback } from 'react';

const useGetState = <T>(setter: Dispatch<SetStateAction<T>>) => {
  const getState = useCallback(
    () =>
      new Promise<T>((resolve) => {
        setter((state) => {
          resolve(state);
          return state;
        });
      }),
    [setter]
  );

  return getState;
};

export { useGetState };
