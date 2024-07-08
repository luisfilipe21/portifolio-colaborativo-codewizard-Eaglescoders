import { create } from 'zustand';

const useApiStore = create((set) => ({
  data: null,
  error: null,
  loading: false,
  setData: (data) => set({ data }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
}));

export default useApiStore;
