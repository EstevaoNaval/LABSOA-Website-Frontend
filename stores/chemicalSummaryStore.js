import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { usePaginationStore } from './paginationStore.js'

export const useChemicalSummaryStore = defineStore('chemicalSummary', {
    state: () => ({
        summaries: [],
    }),
    actions: {
        async fetchAllChemicalsSummary(params) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
            }
            
            const response = await $axios.get('/api/chemicals/summary', { 
                params: params
            })
            
            this.summaries = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchSimpleSearchSummary(params) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
            }
            
            const response = await $axios.get('/api/chemicals/search/summary', { 
                params: params
            })
            
            this.summaries = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchAdvancedSearchSummary(params) {
            const paginationStore = usePaginationStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
            }
            
            const response = await $axios.get('/api/chemicals/advanced/summary', { 
                params: params
            })
            
            this.summaries = response.data.results
            paginationStore.setTotalItems(response.data.count)
        }
    },
    persist: true,

})
