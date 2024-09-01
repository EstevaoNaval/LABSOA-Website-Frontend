import { useChemicalStore } from '~/stores/chemicalStore'
import { useChemicalSummaryStore } from '~/stores/chemicalSummaryStore'
import { useSelectedChemicalStore } from '~/stores/selectedChemicalStore'

export function createChemicalService(mode) {
  const chemicalStore = useChemicalStore()
  const chemicalSummaryStore = useChemicalSummaryStore()
  const selectedChemicalStore = useSelectedChemicalStore()

  if (mode === 'summary') {
    return {
      fetchSimpleSearch: (params) => chemicalSummaryStore.fetchSimpleSearchSummary(params),
      fetchAdvancedSearch: (params) => chemicalSummaryStore.fetchAdvancedSearchSummary(params),
      fetchAll: (params) => chemicalSummaryStore.fetchAllChemicalsSummary(params)
    }
  } else {
    return {
      fetchSimpleSearch: (params) => chemicalStore.fetchSimpleSearch(params),
      fetchAdvancedSearch: (params) => chemicalStore.fetchAdvancedSearch(params),
      fetchAll: (params) => chemicalStore.fetchAllChemicals(params),
      fetchSelectedChemical: (id) => selectedChemicalStore.fetchSelectedChemical(id)
    }
  }
}
