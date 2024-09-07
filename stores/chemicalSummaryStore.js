import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { usePaginationStore } from './paginationStore.js'
import { useSortStore } from './sortingStore.js'

export const useChemicalSummaryStore = defineStore('chemicalSummary', {
    state: () => ({
        summaries: [],
    }),
    actions: {
        async fetchAllChemicalsSummary(params) {
            const paginationStore = usePaginationStore()
            const sortStore = useSortStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
                ordering: sortStore.getCurrSortOption(),
            }
            
            const response = await $axios.get('/api/chemicals/summary', { 
                params: params
            })
            
            this.summaries = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchSimpleSearchSummary(params) {
            const paginationStore = usePaginationStore()
            const sortStore = useSortStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
                ordering: sortStore.getCurrSortOption(),
            }
            
            const response = await $axios.get('/api/chemicals/search/summary', { 
                params: params
            })
            
            this.summaries = response.data.results
            paginationStore.setTotalItems(response.data.count)
        },
        async fetchAdvancedSearchSummary(params) {
            const paginationStore = usePaginationStore()
            const sortStore = useSortStore()
            const { $axios } = useNuxtApp()
            
            params = {
                ...params,
                page: paginationStore.page,
                ordering: sortStore.getCurrSortOption(),
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
