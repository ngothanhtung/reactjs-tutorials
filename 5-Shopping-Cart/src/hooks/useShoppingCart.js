import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const persistOptions = {
  name: 'ecommerce-storage', // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};

export const useShoppingCartStore = create(
  persist(
    devtools((set, get) => ({
      count: 0,
      bears: 9,
      loading: false,
      products: [],
      increase: () => set((state) => ({ count: state.count + 1 }), false, { type: 'increase' }),
      decrease: () => set((state) => ({ count: state.count - 1 }), false, { type: 'decrease' }),
      getProducts: async () => {
        const myCount = get().count;
        console.log('My Count', myCount);

        set({ loading: true }, false, 'getProducts/loading');
        const response = await fetch('http://localhost:9000/products');
        const results = await response.json();
        set({ products: results, loading: false }, false, 'getProducts/done');
      },
    })),
    persistOptions,
  ),
);
