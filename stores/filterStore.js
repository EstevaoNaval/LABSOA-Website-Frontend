// stores/filterStore.js
import { defineStore } from 'pinia';
import { filterDefinitions } from '~/filters/filterDefinitions'; // Imports filter configuration

export const useFilterStore = defineStore('filterStore', {
    state: () => ({
        filters: Object.keys(filterDefinitions).reduce((acc, key) => {
            acc[key] = filterDefinitions[key].default;
            return acc;
        }, {}),
    }),
  
    actions: {
        setFilter(filterKey, value) {
            if (filterKey in this.filters) {
                this.filters[filterKey] = value;
            }
        },

        resetFilters() {
            Object.keys(filterDefinitions).forEach(key => {
                this.filters[key] = filterDefinitions[key].default;
            });
        },
    },
  
    getters: {
        appliedFilters(state) {
            return Object.keys(state.filters)
                .filter(key => state.filters[key] !== filterDefinitions[key].default)
                .reduce((acc, key) => {
                    acc[key] = state.filters[key];
                    return acc;
                }, {});
        },
    },
});
