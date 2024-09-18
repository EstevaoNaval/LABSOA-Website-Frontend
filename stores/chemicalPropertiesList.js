import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { useFilterStore } from './filterStore.js'
//import { usePaginationStore } from './paginationStore.js'
//import { useSortStore } from './sortingStore.js'

export const useChemicalPropertiesListStore = defineStore('chemicalPropertiesList', {
    state: () => ({
        properties: {
            jplogp: [],
            molecular_weight: [],
            tpsa: [],
            mp_lower_bound: [],
            mp_upper_bound: [],
            h_bond_acceptor: [],
            h_bond_donor: [],
            heavy_atom: [],
            rotatable_bond: []
        }
    }),
    actions: {
        async fetchAllChemicalProperties() {
            const filterStore = useFilterStore()
            const { $axios } = useNuxtApp()

            const filters = filterStore.getFilterParams

            const params = {
                ...filters,
            }

            // Faz a requisição para o endpoint de propriedades
            const response = await $axios.get('/api/chemicals/prop-list/', { 
                params: params
            })

            // Atualiza as listas de propriedades com os dados retornados pela API
            this.properties = {
                jplogp: response.data.results.jplogp || [],
                molecular_weight: response.data.results.molecular_weight || [],
                tpsa: response.data.results.tpsa || [],
                mp_lower_bound: response.data.results.mp_lower_bound || [],
                mp_upper_bound: response.data.results.mp_upper_bound || [],
                h_bond_acceptor: response.data.results.h_bond_acceptor || [],
                h_bond_donor: response.data.results.h_bond_donor || [],
                heavy_atom: response.data.results.heavy_atom || [],
                rotatable_bond: response.data.results.rotatable_bond || [],
                //publication_date: response.data.results.publication_date || []
            }

            // Atualiza o total de itens na store de paginação
            //paginationStore.setTotalItems(response.data.total_count)
        }
    },
    persist: true, // Persistência da store
})
