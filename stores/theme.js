import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
      theme: process.client ? document.documentElement.getAttribute('data-theme') || 'night' : 'night',
    }),
    actions: {
      setTheme(theme) {
        this.theme = theme;
        if (process.client) {
          document.documentElement.setAttribute('data-theme', theme);
        }
      },
    },
    getters: {
      currentTheme: (state) => state.theme,
    },
});
