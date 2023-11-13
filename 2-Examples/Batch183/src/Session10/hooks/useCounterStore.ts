import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const persistOptions = {
  name: 'counter-storage', // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};

export interface CounterState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

const useCounterStore = create<any>(
  persist(
    devtools((set, get) => ({
      count: 10,
      increaseCount: (value: number) => {
        set((state: any) => ({ count: state.count + value }), false, { type: '@Counter/increaseCount', payload: { value } });
      },
      decreaseCount: (value: number) => {
        set((state: any) => ({ count: state.count - value }), false, { type: '@Counter/decreaseCount', payload: { value } });
      },
    })),
    persistOptions,
  ),
);

export default useCounterStore;
