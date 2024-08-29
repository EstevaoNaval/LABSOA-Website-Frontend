<template>
    <Head>
        <Title>Search | LabSOADB</Title>
    </Head>
    <div class="h-full flex items-center justify-center py-8">
        <div class="w-full flex flex-col">
            <div class="w-3/4 mx-auto gap-8 hidden xl:flex xl:flex-col">
                <h1 class="text-4xl font-bold">Search Chemicals</h1>
                <h1 class="text-xl w-3/4">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>

                <div role="tablist" class="tabs tabs-bordered mx-auto tabs-lg w-full">
                    <input type="radio" name="my_tabs_1" role="tab" class="tab tabs-bordered " aria-label="Chemicals" checked="checked" />
                    <div role="tabpanel" class="border-t-2 border-t-gray-100 border-opacity-30 tab-content p-10">
                        <div class="join w-full">
                          <input class="input input-bordered join-item text-2xl w-full p-8" data-typewriter="LSOA5108276818...;N-(2-Aminoethyl)-D-gluconamide...;C1=CC=C(C=C1)C=O...;[X3&H0]...;C9H8O4...;InChI=1S/C3H6O/c1-3(2)4/h1-2H3..." type="text" required>
                            <div class="indicator">
                                <button type="submit" class="btn btn-primary h-full join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-10 w-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" class="tab tabs-bordered" aria-label="Literature" />
                    <div role="tabpanel" class="border-t-2 border-t-gray-100 border-opacity-30 tab-content p-10">
                        <div class="join w-full">
                            <input class="input input-bordered join-item text-2xl w-full p-8" data-typewriter="Search DOI or Title...;10.1016/j.bioorg.2020.103984..." type="text" required>
                            <div class="indicator">
                                <button type="submit" class="btn btn-primary h-full join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-10 w-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex">
                    <p class="text-lg mr-auto">Showing {{ 1 + chemicals_total_per_page * (currentPage - 1)}} to {{ chemicals_total_per_page * currentPage < totalResults ? chemicals_total_per_page * currentPage : totalResults}} of {{ totalResults }} results</p>
                    <pagination @change-page="handlePageChange" :currentPage="currentPage" :totalPages="totalPages"></pagination>
                </div>
            </div>

            <div class="w-[90%] mx-auto gap-8 hidden md:flex md:flex-col xl:hidden">
                <h1 class="text-4xl font-bold">Search Chemicals</h1>
                <h1 class="text-xl">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>

                <div role="tablist" class="tabs tabs-bordered w-full mx-auto tabs-lg xl:hidden">
                    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Chemicals" checked="checked" />
                    <div role="tabpanel" class="border-t-2 border-t-gray-100 border-opacity-30 tab-content p-10">
                        <div class="join w-full">
                            <input class="input input-bordered join-item text-2xl w-full p-8" data-typewriter="LSOA5108276818...;N-(2-Aminoethyl)-D-gluconamide...;C1=CC=C(C=C1)C=O...;[X3&H0]...;C9H8O4...;InChI=1S/C3H6O/c1-3(2)4/h1-2H3..." type="text" required>
                            <div class="indicator">
                                <button type="submit" class="btn btn-primary h-full join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-10 w-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                  
                    </div>
                    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Literature" />
                    <div role="tabpanel" class="border-t-2 border-t-gray-100 border-opacity-30 tab-content p-10">
                        <div class="join w-full">
                            <input class="input input-bordered join-item text-2xl w-full p-8" data-typewriter="Search DOI or Title...;10.1016/j.bioorg.2020.103984..." type="text" required>
                            <div class="indicator">
                                <button type="submit" class="btn btn-primary h-full join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-10 w-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <pagination class="mx-auto" @change-page="handlePageChange" :currentPage="currentPage" :totalPages="totalPages"></pagination>
                    <p class="text-lg mx-auto">Showing {{ 1 + chemicals_total_per_page * (currentPage - 1)}} to {{ chemicals_total_per_page * currentPage < totalResults ? chemicals_total_per_page * currentPage : totalResults}} of {{ totalResults }} results</p>
                </div>
            </div>

            <div class="w-[90%] mx-auto gap-4 flex flex-col md:hidden">
                <h1 class="text-2xl font-bold">Search Chemicals</h1>
                <h1 class="text-md mb-4">
                    Explore LabSOADB to find chemicals with ease. Feel free to search, 
                    filter, and accurately analyze our database, leveraging advanced tools 
                    to streamline discovery and data insights.
                </h1>

                <select v-model="searchFieldSelected" class="select select-bordered text-lg w-full">
                    <option v-for="option in searchFieldOptions" :key="option.id" :value="option.value"><a>{{ option.text }}</a></option>
                </select>
                <div class="join w-full" v-if="searchFieldSelected === searchFieldOptions[0]['value']">
                    <input class="input input-bordered join-item text-lg w-full" type="text" placeholder="Search Chemical" required>
                    <div class="indicator">
                        <button type="submit" class="btn btn-primary join-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-7 w-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="join w-full" v-if="searchFieldSelected === searchFieldOptions[1]['value']">
                    <input class="input input-bordered join-item text-lg w-full" type="text" placeholder="Search DOI or Title" required>
                    <div class="indicator">
                        <button type="submit" class="btn btn-primary join-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-7 w-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container mx-auto p-6">
                <h1 class="text-3xl font-bold mb-6">Search Results</h1>
                <!-- Mostrar uma mensagem de carregamento ou de erro -->
                <div v-if="loading" class="text-center">
                    <span class="loading loading-spinner loading-lg"></span>
                </div>
                <div v-if="error" class="text-red-500 text-center">Error: {{ error }}</div>
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
import Pagination from '~/components/Pagination.vue'; // Componente de paginação
import ChemicalCard from '~/components/ChemicalCard.vue';
import { useEndpointStore } from '~/stores/endpointStore'; // Importe o store

const { $axios } = useNuxtApp()

const chemicals = ref([]);
const loading = ref(true);
const error = ref(null);

const currentPage = ref(1);
const totalPages = ref(1);
const totalResults = ref(0);

const endpointStore = useEndpointStore(); // Acessa o store para obter o endpoint

const chemicals_total_per_page = 10

// Função para buscar os químicos
async function fetchChemicals(page) {
    try {
        const response = await $axios.get(endpointStore.endpoint, {
            params: { page }
        });
        totalResults.value = response.data.count;
        chemicals.value = response.data.results;
        totalPages.value = Math.ceil(totalResults.value / chemicals_total_per_page);
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

// Função chamada ao mudar de página
function handlePageChange(page) {
    currentPage.value = page;
    fetchChemicals(page);
}

const searchFieldOptions = ref([
    {

        id: 0, 
        value: "chemicalsSearchFieldOption", 
        text: "Chemicals" 
    },
    { 
        id: 1, 
        value: "literatureSearchFieldOption", 
        text: "Literature" 
    },
])

const searchFieldSelected = defineModel("searchFieldSelected")
// Select the first search field option
searchFieldSelected.value = searchFieldOptions.value[0]['value']

// Busca os químicos ao montar o componente
onMounted(() => {
    document.querySelectorAll('[data-typewriter]').forEach(el => {
        new Typerwriter(el, {
            repeat: true,
            speed: 50,
            delay: 1000
        })
    })

    fetchChemicals(currentPage.value);
});
</script>