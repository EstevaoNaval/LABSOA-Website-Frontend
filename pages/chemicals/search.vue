<template>
    <Head>
        <Title>Search | LabSOADB</Title>
    </Head>
    <div class="h-full flex items-center justify-center py-8">
        <div class="w-full flex flex-col gap-8">
            <div class="w-3/4 mx-auto hidden xl:flex xl:flex-col">
                <h1 class="text-4xl font-bold">Search Chemicals</h1>
                <h1 class="text-xl w-3/4">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>
            </div>

            <div class="w-[90%] mx-auto hidden md:flex md:flex-col xl:hidden">
                <h1 class="text-4xl font-bold">Search Chemicals</h1>
                <h1 class="text-xl">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>
            </div>

            <div class="w-[90%] mx-auto flex flex-col md:hidden">
                <h1 class="text-2xl font-bold">Search Chemicals</h1>
                <h1 class="text-md mb-4">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>
            </div>
            
            <div class="mx-auto sm:w-[90%] xl:w-3/4">
                <search-field :typewriterEffect='true'></search-field>
            </div>

            <div class="hidden xl:flex xl:flex-col w-3/4 mx-auto">
                <div class="flex">
                    <p class="text-lg mr-auto">Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results</p>
                    <pagination></pagination>
                </div>
            </div>
            <div class="hidden md:flex md:flex-col xl:hidden mx-auto">
                <div class="flex flex-col gap-4">
                    <pagination class="mx-auto"></pagination>
                    <p class="text-lg mx-auto">Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results</p>
                </div>
            </div>

            <div class="container mx-auto p-6">
                <h1 class="text-3xl font-bold mb-6">Search Results</h1>
                <!-- Mostrar uma mensagem de carregamento ou de erro -->
                <div v-if="loading" class="text-center">
                    <span class="loading loading-spinner loading-lg"></span>
                </div>
                <!-- Renderizar os cards de químicos -->
                <div v-if="!loading && chemicals.length > 0" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <chemical-card v-for="chemical in chemicals" :key="chemical.api_id" :chemical="chemical" />
                </div>
            
                <!-- Exibir uma mensagem se não houver resultados -->
                <div v-if="!loading && chemicals.length === 0" class="text-center">No results found.</div>
            </div>
        </div>
    </div>
        
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useChemicalStore } from '~/stores/chemicalStore'
import { useChemicalSummaryStore } from '~/stores/chemicalSummaryStore'
import { useSelectedChemicalStore } from '~/stores/selectedChemicalStore'
import { usePaginationStore } from '~/stores/paginationStore';
import { getChemicalService } from '~/factories/chemicalServiceFactory'
import Pagination from '~/components/Pagination.vue';
import SearchField from '~/components/SearchField.vue'
import ChemicalCard from '~/components/ChemicalCard.vue';

const paginationStore = usePaginationStore()

// Stores
const chemicalStore = useChemicalStore()
const chemicalSummaryStore = useChemicalSummaryStore()
const selectedChemicalStore = useSelectedChemicalStore()

// Route
const route = useRoute()

const chemicals = ref([]);
const loading = ref(true);
const error = ref(null);

// Função para buscar químicos
async function fetchChemicals() {
    const { 
        mode = 'summary', 
        type = 'simple', 
        ...params 
    } = route.query

    // Chemical Search Service
    const chemicalService = getChemicalService(mode)

    try {    
        switch (type) {
            case 'simple':
                await chemicalService.fetchSimpleSearch(params)
                break
            case 'advanced':
                await chemicalService.fetchAdvancedSearch(params)
                break
            case 'selected':
                if (route.query.id) {
                    await chemicalService.fetchSelectedChemical(params)
                }
                break
            case 'all':
                await chemicalService.fetchAll(params)
        }
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    } 

    // Atualiza os dados para renderização
    chemicals.value = mode === 'summary' ? chemicalSummaryStore.summaries : chemicalStore.chemicals
}

// Busca os químicos ao montar o componente
onMounted(() => {
    fetchChemicals();
});

watch(() => route.query, () => {
    fetchChemicals();
});

watch(() => paginationStore.page, () => {
    fetchChemicals();
});
</script>