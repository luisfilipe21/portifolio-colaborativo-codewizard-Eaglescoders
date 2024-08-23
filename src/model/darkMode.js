import { create } from "zustand";

export const useDarkMode = create((set) => ({
    darkMode: false,
    setDarkMode: (darkMode) => set({ darkMode }),
}));