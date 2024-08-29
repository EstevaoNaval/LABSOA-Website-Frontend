import { defineStore } from 'pinia';

export const useEndpointStore = defineStore('endpoint', {
    state: () => ({
        endpoint: '/chemicals/summary' // Endpoint padrão inicial
    }),
    actions: {
        setEndpoint(newEndpoint) {
            this.endpoint = newEndpoint;
        }
    }
});