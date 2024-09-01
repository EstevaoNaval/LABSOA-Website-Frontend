import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { usePaginationStore } from './paginationStore.js'

export const useChemicalStore = defineStore('chemical', {
    state: () => ({
        chemicals: [],
    }),
    actions: {
        async fetchAllChemicals(params = {}) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()

            params = {
                page: paginationStore.page,
            }
            
            const response = await $axios.get('/api/chemicals', { 
                params: params
            })
            
            this.chemicals = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchSimpleSearch(params) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()

            params = {
                ...params,
                page: paginationStore.page,
            }
            
            const response = await $axios.get('/api/chemicals/search', { 
                params: params
            })
            
            this.chemicals = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchAdvancedSearch(params) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
            }

            const response = await $axios.get('/api/chemicals/advanced', { params: params })
            
            this.chemicals = response.data.results
            paginationStore.setTotalItems(response.data.count)
        }
    },
    persist: true,
})
