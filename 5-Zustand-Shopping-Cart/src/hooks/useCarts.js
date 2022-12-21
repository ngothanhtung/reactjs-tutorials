import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const persistOptions = {
  name: 'cart-storage', // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};

export const useCarts = create(
  persist(
    devtools((set, get) => ({
      items: [],
      add: ({ product, quantity }) => {
        const items = get().items;
        const found = items.find((x) => x.product.id === product.id);
        if (found) {
          found.quantity++;
        } else {
          items.push({ product, quantity });
        }

        return set({ items: items }, false, { type: 'carts/addToCart' });
      },
      remove: (id) => {
        const items = get().items;
        const newItems = items.filter((x) => x.product.id !== id);
        return set({ items: newItems }, false, { type: 'carts/removeFromCart' });
      },
      increase: (id) => {
        const items = get().items;
        const found = items.find((x) => x.product.id === id);
        found.quantity++;
        return set({ items: items }, false, { type: 'carts/increase' });
      },
      decrease: (id) => {
        const items = get().items;
        const found = items.find((x) => x.product.id === id);
        if (found.quantity === 1) {
          const newItems = items.filter((x) => x.product.id !== found.product.id);
          return set({ items: newItems }, false, { type: 'carts/decrease' });
        } else {
          found.quantity--;
          return set({ items: items }, false, { type: 'carts/increase' });
        }
      },
    })),
    persistOptions,
  ),
);
