import type { Dispatch, SetStateAction } from 'react';

type UseGetState = <T = unknown>(
  setter: Dispatch<SetStateAction<T>>
) => Promise<T>;

const useGetState: UseGetState = (setter) => {
  return new Promise((resolve) => {
    setter((state) => {
      resolve(state);
      return state;
    });
  });
};

export { useGetState };
export type { UseGetState };
