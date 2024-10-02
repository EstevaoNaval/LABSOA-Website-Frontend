<template>
  <div :class="['collapse collapse-arrow	bg-base-200 mx-auto lg:hidden sticky top-0 z-[1] table-of-contents', isTableOfContentsOpened ? 'collapse-open' : 'collapse-close']" >
    <input type="radio" class="cursor-pointer" name="my-accordion-2" @click="toggleTableOfContents" />
    <div class="collapse-title text-slate-400 text-lg md:text-xl font-medium">Table of Contents</div>
    <div class="collapse-content">
      <div class="bg-base-200 font-semibold lg:hidden overflow-y-auto max-h-screen">
        <div class="flex w-[90%]">
          <div class="flex flex-col w-full">
            <scrollspy
              @click="toggleTableOfContents"
              :sections="sectionsRef"
              scrollspy-list="text-md md:text-lg font-semibold menu text-slate-400" 
              scrollspy-item="py-1 pl-2 hover:text-secondary hover:border-secondary hover:font-bold hover:rounded-sm  hover:border-l-4" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-if="selectedChemicalStore.loading" class="text-center">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  
  <div data-aos="fade-up" v-else class="py-4 lg:py-16 w-[90%] mx-auto">
    <div class="flex">
      <div class="w-full flex flex-col rounded-box">
        <div class="space-y-2">
          <div class="flex flex-col w-full md:w-5/6 gap-2">
            <h1 class="text-lg md:text-xl font-semibold text-primary">
              {{ selectedChemicalStore.selectedChemical.api_id }}
            </h1>
            <h1 class="text-xl md:text-3xl font-bold">
              {{ selectedChemicalStore.selectedChemical.identifier.iupac_name }}
            </h1>

            <div class="flex flex-col">
              <h1 class="text-md md:text-lg font-semibold text-slate-400 my-auto">
                <p>Created on
                  <time :datetime="selectedChemicalStore.selectedChemical.created_at">
                    {{ new Date(selectedChemicalStore.selectedChemical.created_at).toLocaleString('sv-SE', { day: 'numeric', month: 'numeric', year: 'numeric' }) }}
                  </time>
                </p>
              </h1>

              <h1 class="text-md md:text-lg font-semibold text-slate-400 my-auto">
                <p>First published in
                  <time :datetime="selectedChemicalStore.getFirstPublicationDate().toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' })">
                    {{ selectedChemicalStore.getFirstPublicationDate().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }}
                  </time>
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div class="py-8 grid grid-cols-1 2xl:grid-cols-2">
          <section data-aos="fade-up" class="space-y-4 w-full md:w-3/4" id="2d_depiction">
            <h1 class="text-lg md:text-2xl font-bold">2D Depiction</h1>
            <div class="space-y-4">
              <div class="flex space-x-2">
                <div class="dropdown">
                  <div tabindex="0" role="button" class="btn btn-ghost md:btn-outline btn-primary btn-sm md:btn-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <p class="font-semibold md:text-lg hidden md:flex">Structure Search</p>
                  </div>
                  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box md:text-lg z-[1] w-52 p-2 shadow">
                    <li><a>Similarity</a></li>
                    <li><a>Substructure</a></li>
                  </ul>
                </div>
                
                <NuxtLink :to="selectedChemicalStore.selectedChemical.chem_depiction_image" target="_blank" type="button" class="btn btn-ghost md:btn-outline btn-primary btn-sm md:btn-md my-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p class="font-semibold md:text-lg hidden md:flex">Get Image</p>
                </NuxtLink>
              </div>
              
              <figure class="pb-8">
                <NuxtImg
                  :src="selectedChemicalStore.selectedChemical.chem_depiction_image"
                  alt="Molecular Structure"
                  class="rounded-box shadow-md duration-200 hover:shadow-xl"
                  format="svg"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>
          <section 
            data-aos="fade-up" 
            class="space-y-4 w-full md:w-3/4" 
            id="3d_conformations"
            v-if="selectedChemicalStore.selectedChemical 
            && selectedChemicalStore.selectedChemical.conformation 
            && paginationStore.page > 0 
            && selectedChemicalStore.selectedChemical.conformation[paginationStore.page - 1]"
          >
            <h1 class="text-lg md:text-2xl font-bold"> 3D Conformation </h1>
            
            <div class="flex space-x-2">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost md:btn-outline btn-primary btn-sm md:btn-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <p class="font-semibold md:text-lg hidden md:flex">Structure Search</p>
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box md:text-lg z-[1] w-52 p-2 shadow">
                  <li><a>Similarity</a></li>
                  <li><a>Substructure</a></li>
                </ul>
              </div>
              
              <a 
                :href="selectedChemicalStore.selectedChemical.conformation[paginationStore.page - 1].conf_file" 
                :download="getFileName(selectedChemicalStore.selectedChemical.conformation[paginationStore.page - 1].conf_file)" 
                target="_blank" 
                type="button" 
                class="btn btn-ghost md:btn-outline btn-primary btn-sm md:btn-md my-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <p class="font-semibold md:text-lg hidden md:flex">Download Coordinates</p>
              </a>
            </div>
            
            <ngl-viewer
              :key="nglViewerKey" 
              :file="selectedChemicalStore.selectedChemical.conformation[paginationStore.page - 1].conf_file" 
              class="pb-8 rounded-box h-[12rem] md:h-[21rem] shadow-md duration-200 hover:shadow-xl"
            >
            </ngl-viewer>
            
            <div class="flex justify-center">
              <pagination></pagination>
            </div>
          </section>
        </div>
      </div>
      <div class="w-[20%] hidden lg:flex lg:flex-col">
        <div class="mx-auto space-y-4 overflow-y-auto max-h-screen sticky top-0 p-4">
          <p class="text-xl font-bold">Table of Contents</p>
          <scrollspy 
            :sections="sectionsRef" 
            scrollspy-list="text-lg font-semibold" 
            scrollspy-item="py-1 pl-2 text-slate-400 hover:text-primary hover:border-primary hover:font-bold hover:rounded-sm  hover:border-l-4" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSelectedChemicalStore } from '~/stores/selectedChemicalStore';
import { useRoute } from 'vue-router';
import { usePaginationStore } from '~/stores/paginationStore';
import { useThemeStore } from '~/stores/theme'

import NglViewer from '~/components/NglViewer.vue';
import Pagination from '~/components/Pagination.vue';

const route = useRoute()

var nglViewerKey = ref(1)

const paginationStore = usePaginationStore()
const selectedChemicalStore = useSelectedChemicalStore()
const themeStore = useThemeStore()

var isTableOfContentsOpened = ref(false)

const toggleTableOfContents = () => {
  isTableOfContentsOpened.value = !isTableOfContentsOpened.value
}

const fetchSelectedChemicalDetail = async () => {
  selectedChemicalStore.reset()
  await selectedChemicalStore.fetchSelectedChemical(route.params.labsoadbId)
}

const getFileName = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};

onMounted(() => {
  fetchSelectedChemicalDetail().then(() => {
    // Verifica se os dados da molécula estão disponíveis e têm conformações
    const totalConformations = selectedChemicalStore.selectedChemical?.conformation?.length || 0;
  
    // Atualiza a paginação com base nos novos dados
    paginationStore.setTotalItems(totalConformations);
    paginationStore.setPageSize(1);
    paginationStore.calcTotalPages();
  
    paginationStore.setPage(1);
  })
})

const sectionsRef = ref([
  {
    id: "2d_depiction",
    label: "2D Depiction"
  },
  {
    id: "3d_conformations",
    label: "3D Conformations"
  },
])

watch(() => paginationStore.page, () => {
  nglViewerKey.value *= -1 
})

watch(() => themeStore.isDarkMode, () => {
  nglViewerKey.value *= -1
})
</script>

<style scoped>

</style>