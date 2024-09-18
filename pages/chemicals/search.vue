<template>
    <Head>
        <Title>Search | LabSOADB</Title>
    </Head>
    <div class="h-full flex flex-col items-center justify-center">
        <div class="w-full flex flex-col gap-8">
            <section class="search_bar_background bg-scroll bg-cover bg-center">
                <div class="bg-opacity-80 h-full bg-base-300 py-8 space-y-8">
                    <div class="gap-4 w-3/4 mx-auto hidden xl:flex xl:flex-col">
                        <h1 class="text-4xl font-bold">Search Chemicals</h1>
                        <h1 class="text-2xl w-3/4">
                            Explore LabSOADB to find chemicals with ease. Feel free to search, 
                            filter, and accurately analyze our database, leveraging advanced tools 
                            to streamline discovery and data insights.
                        </h1>
                    </div>
                
                    <div class="gap-4 w-[90%] mx-auto hidden md:flex md:flex-col xl:hidden">
                        <h1 class="text-4xl font-bold">Search Chemicals</h1>
                        <h1 class="text-xl">
                            Explore LabSOADB to find chemicals with ease. Feel free to search, 
                            filter, and accurately analyze our database, leveraging advanced tools 
                            to streamline discovery and data insights.
                        </h1>
                    </div>
                
                    <div class="gap-4 w-[90%] mx-auto flex flex-col md:hidden">
                        <h1 class="text-2xl font-bold">Search Chemicals</h1>
                        <h1 class="text-md mb-4">
                            Explore LabSOADB to find chemicals with ease. Feel free to search, 
                            filter, and accurately analyze our database, leveraging advanced tools 
                            to streamline discovery and data insights.
                        </h1>
                    </div>

                    <div class="mx-auto w-[90%] xl:w-3/4">
                        <search-field :typewriterEffect='true'></search-field>
                    </div>
                </div>
            </section>

            <div class="w-[90%] m-auto hidden xl:flex" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <p class="text-lg mr-auto">
                    Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results
                </p>
                <pagination></pagination>
            </div>
            <div class="w-[90%] gap-4 items-center hidden m-auto md:flex md:flex-col xl:hidden" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <pagination></pagination>
                <p class="text-lg">
                    Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results
                </p>
            </div>
            <div class="w-[90%] flex flex-col mx-auto md:hidden" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <div class="flex mx-auto flex-col gap-4">
                    <pagination class="mx-auto"></pagination>
                </div>
            </div>

            <div class="w-[90%] mx-auto">
                <div class="mb-6 hidden lg:flex">
                    <h1 class="text-2xl font-semibold mr-auto my-auto">Search Results</h1>
                    <button type="button" class="btn btn-ghost" @click="openFilterModal">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" fill="currentColor" class="bi bi-filter size-8" viewBox="0 0 16 16">
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        <h1 class="text-xl">Filter</h1>
                    </button>
                    <sorting class="ml-auto"></sorting>
                </div>
                
                <div class="mb-6 hidden md:flex lg:hidden">
                    <h1 class="text-2xl font-semibold mr-auto my-auto">Search Results</h1>
                    <button type="button" class="btn btn-ghost" @click="openFilterModal">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" fill="currentColor" class="bi bi-filter size-8" viewBox="0 0 16 16">
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <sorting class="ml-auto"></sorting>
                </div>
                
                <div class="mb-4 m-auto flex md:hidden">
                    <h1 class="text-lg font-semibold my-auto mr-auto">Search Results</h1>
                    <button type="button" class="btn btn-ghost btn-sm" @click="openFilterModal">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" fill="currentColor" class="bi bi-filter size-6" viewBox="0 0 16 16">
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <sorting class="ml-auto"></sorting>
                </div>
                
                <!-- Mostrar uma mensagem de carregamento ou de erro -->
                <div v-if="fetchChemicalStore.loading" class="text-center">
                    <span class="loading loading-spinner loading-lg"></span>
                </div>
                
                <!-- Renderizar os cards de químicos -->
                <div v-if="!fetchChemicalStore.loading && fetchChemicalStore.chemicals.length > 0" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <chemical-card class="duration-200 hover:shadow-2xl" v-for="chemical in fetchChemicalStore.chemicals" :key="chemical.api_id" :chemical="chemical" />
                </div>
            
                <!-- Exibir uma mensagem se não houver resultados -->
                <div v-if="!fetchChemicalStore.loading && fetchChemicalStore.chemicals.length === 0" class="text-center text-lg font-semibold">No results found.</div>
            </div>

            <div class="mb-8 w-[90%] m-auto hidden xl:flex" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <p class="text-lg mr-auto">
                    Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results
                </p>
                <pagination></pagination>
            </div>
            <div class="mb-8 w-[90%] gap-4 items-center hidden m-auto md:flex md:flex-col xl:hidden" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <pagination></pagination>
                <p class="text-lg">
                    Showing {{ 1 + paginationStore.pageSize * (paginationStore.page - 1)}} to {{ paginationStore.pageSize * paginationStore.page < paginationStore.totalItems ? paginationStore.pageSize * paginationStore.page : paginationStore.totalItems}} of {{ paginationStore.totalItems }} results
                </p>
            </div>
            <div class="mb-8 w-[90%] flex flex-col mx-auto md:hidden" v-if="paginationStore.totalItems > 0 && paginationStore.totalPages > 1">
                <div class="flex mx-auto flex-col gap-4">
                    <pagination class="mx-auto"></pagination>
                </div>
            </div>
        </div>
    </div>
    <filter-modal ref="filterModalRef"></filter-modal>
</template>

<script setup>
import { ref } from 'vue';
import { usePaginationStore } from '~/stores/paginationStore';
import { useSortStore } from '~/stores/sortingStore'
import { useFetchChemicalStore } from '~/stores/fetchChemicalStore'

import Pagination from '~/components/Pagination.vue';
import SearchField from '~/components/SearchField.vue'
import ChemicalCard from '~/components/ChemicalCard.vue';
import Sorting from '~/components/Sorting.vue'
import FilterModal from '~/components/FilterModal.vue';

const filterModalRef = ref(null)

// Stores
const paginationStore = usePaginationStore()
const sortStore = useSortStore();
const fetchChemicalStore = useFetchChemicalStore()

function openFilterModal() {
    if(filterModalRef.value) {
        filterModalRef.value.toggleFilterComponentModal()
    }
}

onMounted(() => {
    fetchChemicalStore.fetchChemicals()
})

watch(() => paginationStore.page, () => {
    fetchChemicalStore.fetchChemicals();
});

watch(() => [sortStore.currSortOptionId, sortStore.ascDirection], () => {
    paginationStore.setPage(1);
    fetchChemicalStore.fetchChemicals();
})
</script>

<style scoped>
    .search_bar_background {
        background-image: url('~/assets/search_page_search_bar_background.webp');
    }
</style>