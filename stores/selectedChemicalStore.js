import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useSelectedChemicalStore = defineStore('selectedChemical', {
    state: () => ({
        selectedChemical: {},
    }),
    actions: {
        async fetchSelectedChemical(id) {
            const { $axios } = useNuxtApp()
            
            const response = await $axios.get(`/api/chemicals/${id}`)
            
            if(response.data.results) {
                this.selectedChemical = response.data.results[0]
            }
        }
    },
    persist: true,
})
