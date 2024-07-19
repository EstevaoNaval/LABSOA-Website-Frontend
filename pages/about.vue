<template>
  <Head>
    <Title>About | LabSOADB</Title>
  </Head>

  <details ref="tableOfContentsDetails" :data-theme="currTheme" class="dropdown mx-auto flex flex-col lg:hidden bg-base-200 table-of-contents sticky top-0 z-[1]">
    <summary class="flex w-[90%] mx-auto py-4" @click="toggleTableOfContentsArrow()">
      <div class="flex w-full">
        <h2 class="font-bold md:text-xl sm:text-lg mr-auto">
          Table of Contents
        </h2>
        <label class="swap swap-rotate ml-auto">
          <input ref="tableOfContentsCheckbox" type="checkbox" />
                
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 swap-off">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 swap-on">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </label>
      </div>
    </summary>
    
    <div class="bg-base-200 dropdown-content rounded-box shadow-md font-semibold lg:hidden overflow-y-auto p-4 max-h-screen">
      <div class="flex w-[90%]">
        <div class="flex flex-col w-full">
          <scrollspy
            @click="closeTableOfContents();toggleTableOfContentsArrow();" 
            :sections="sectionsRef"
            scrollspy-list="text-md md:text-lg font-semibold menu text-slate-400" 
            scrollspy-item="py-1 pl-2 hover:text-secondary hover:border-secondary hover:font-bold hover:rounded-sm  hover:border-l-4" 
          />
        </div>
      </div>
    </div>
  </details>

  <div data-aos="fade-up" class="mx-auto w-[90%] flex flex-col py-4 lg:py-16">
    <div class="flex">
      <div class="w-full lg:w-[80%] flex flex-col">
        <div class="space-y-2">
          <h1 class="text-2xl md:text-6xl text-primary font-bold">
            About LabSOADB
          </h1>
          
        </div>
        <div class="py-8 flex">
          <div class="w-[90%]">
            <section data-aos="fade-up" id="introduction">
              <h1 class="text-lg md:text-3xl font-bold">Introduction</h1>
              <div class="overflow-x-auto pb-16 pt-8 text-lg md:text-xl space-y-4">
                <p>
                  LabSOADB is a open database of chemicals gathered solely from automated chemical extraction from literature. Using data mining techniques, enhanced with NLP, all chemicals that compose LabSOADB were exctracted
                  from manuscripts, msc dissertations, thesis, etc, in a automated way.
                </p>
                <p>
                  LabSOADB exists with the purpose of leading a family of databases composed by chemical data, automatically, mined from several unstructured data sources. Using <NuxtLink to="/pdf2chemicals/about" class="link link-secondary lg:link-primary duration-200 lg:hover:text-secondary">PDF2Chemicals</NuxtLink> to do this mining, LabSOADB become a proof of concept to demonstrate that is 
                  possible to populate chemical databases, requiring minimal human interference.
                </p>
              </div>
            </section>
            <section data-aos="fade-up" id="uff-labsoa-project">
              <h1 class="text-lg md:text-3xl font-bold">The UFF-LabSOA project</h1>
              <div class="overflow-x-auto pb-16 pt-8 text-lg md:text-xl space-y-4">
                <p>
                  One of the core problems faced by cheminformatics nowadays is the limited amount of structured experimental data. Chemoinformatics, primarily, works with the use of <i>in silico</i> data processing in order to generate chemical attributes that, previously, could you only be generated through laboratory experiments.
                </p>
                <p>
                  With the advent of the information age, accompanied by machine and deep learning techniques, the priority of more structured data went from an optional status to an extremely urgent need, considering that machine and deep learning models, to generate good results, need a large amount of structured data.
                </p>
                <p>
                  With the purpose of solve this problem, the project UFF-LabSOA born, dividing itself in two steps. The first step was creating a tool, called <NuxtLink to="/pdf2chemicals/about" class="link link-secondary lg:link-primary duration-200 lg:hover:text-secondary">PDF2Chemicals</NuxtLink>, 
                  to extract those experimental data scattered through manuscripts, thesis, books, etc. As an initial test, we use <NuxtLink to="/pdf2chemicals/about" class="link link-secondary lg:link-primary duration-200 lg:hover:text-secondary">PDF2Chemicals</NuxtLink> to extract the organic compounds synthetized by Federal Fluminense Unviersity's Organic Synthesis Lab (UFF-LabSOA), therefore, the name of the project.
                </p>
                <p>
                  The next step was create a database, called <NuxtLink to="/home" class="link link-secondary lg:link-primary duration-200 lg:hover:text-secondary">LabSOADB</NuxtLink>, populated with those extracted data,
                  to democratize the access of those data for the scientific community. Also, to ease the search and download of <NuxtLink to="/home" class="link link-secondary lg:link-primary duration-200 lg:hover:text-secondary">LabSOADB</NuxtLink>, this website created, allowing any non-technical user to access the gathered data inserted in our database.
                </p>
              </div>
            </section>
          </div>
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
import Scrollspy from '~/components/Scrollspy.vue';

var tableOfContentsDetails = ref(null)
var tableOfContentsCheckbox = ref(null)

const toggleTableOfContentsArrow = () => {
  if(tableOfContentsCheckbox.value.hasAttribute("checked")) {
    tableOfContentsCheckbox.value.removeAttribute("checked")
  }else{
    tableOfContentsCheckbox.value.setAttribute("checked", "")
  }
  
}

const closeTableOfContents = () => {
  if(tableOfContentsDetails.value.hasAttribute("open")) {
    tableOfContentsDetails.value.toggleAttribute("open")
  }
}

const sectionsRef = ref([
  {
    id: 'introduction',
    label: 'Introduction',
  },
  {
    id: 'uff-labsoa-project',
    label: 'The UFF-LabSOA project'
  }
])
</script>

<style scoped>

</style>