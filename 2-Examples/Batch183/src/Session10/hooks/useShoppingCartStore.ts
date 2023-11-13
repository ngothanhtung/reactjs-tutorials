import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const persistOptions = {
  name: 'cart-storage', // unique name
  // getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};

export interface ShoppingCartState {
  items: any[];
  add: (product: any) => void;
  remove: (id: any) => void;
  increase: (id: any) => void;
  decrease: (id: any) => void;
}

const useShoppingCartStore = create<any>(
  persist(
    devtools((set, get) => ({
      items: [],
      add: (product: any) => {
        const items = get().items;
        const found = items.find((x: any) => x.product.id === product.id);
        if (found) {
          found.quantity++;
        } else {
          items.push({ product, quantity: 1 });
        }

        return set({ items: items }, false, { type: 'carts/addToCart', payload: { product, quantity: 1 } });
      },
      remove: (id: any) => {
        const items = get().items;
        const newItems = items.filter((item: any) => item.product.id !== id);
        return set({ items: newItems }, false, { type: 'carts/removeFromCart', payload: { id } });
      },

      increase: (id: any) => {
        const items = get().items;
        const found = items.find((x: any) => x.product.id === id);
        if (found) {
          found.quantity++;
        }
        return set({ items: items }, false, { type: 'carts/increase', payload: { id } });
      },

      decrease: (id: any) => {
        const items = get().items;
        const found = items.find((x: any) => x.product.id === id);

        if (found) {
          found.quantity--;
          if (found.quantity === 0) {
            const newItems = items.filter((item: any) => item.product.id !== id);
            return set({ items: newItems }, false, { type: 'carts/removeFromCart', payload: { id } });
          }
        }

        return set({ items: items }, false, { type: 'carts/decrease', payload: { id } });
      },
    })),
    persistOptions,
  ),
);

export default useShoppingCartStore;
