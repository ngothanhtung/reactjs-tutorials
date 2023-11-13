import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import axiosClient from '../../Session06/configs/axiosClient';

const persistOptions = {
  name: 'auth-storage', // unique name
  getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
};

export interface AuthState {
  loading: boolean;
  loggedInUser: any;
  access_token: string;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<any>(
  persist(
    devtools((set, get) => ({
      loading: false,
      loggedInUser: null,
      access_token: null,
      login: async (username: string, password: string) => {
        set((state: any) => ({ loading: false }), false, { type: '@auth/loading', payload: {} });
        const response = await axiosClient.post('/auth/login', { username, password });
        set((state: any) => ({ loading: false, loggedInUser: response.data.loggedInUser, access_token: response.data.access_token }), false, {
          type: '@auth/login/ok',
          payload: {
            loggedInUser: response.data.loggedInUser,
            access_token: response.data.access_token,
          },
        });
      },
      logout: () => {
        set((state: any) => ({ loggedInUser: null, access_token: null }), false, { type: '@auth/logout', payload: {} });
      },
    })),
    persistOptions,
  ),
);

export default useAuthStore;
