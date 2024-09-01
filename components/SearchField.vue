<template>
  <div class="hidden md:flex md:flex-col gap-4">
    <div role="tablist" class="tabs tabs-bordered mx-auto tabs-lg w-full">
      <input type="radio" name="my_tabs_1" role="tab" class="tab tabs-bordered " aria-label="Chemicals" checked="checked" />
      <div role="tabpanel" class="border-t-2 border-t-gray-100 border-opacity-30 tab-content p-10">
        <div class="join w-full">
          <input class="input input-bordered join-item text-2xl w-full p-8" v-model="querySearchByRepr" @keydown.enter="handleSearchByRepresentation" data-typewriter="LSOA5108276818...;N-(2-Aminoethyl)-D-gluconamide...;C1=CC=C(C=C1)C=O...;[X3&H0]...;C25H20O4...;InChI=1S/C3H6O/c1-3(2)4/h1-2H3..." type="text" required>
            <div class="indicator">
                <button type="submit" class="btn btn-primary h-full join-item" @click="handleSearchByRepresentation">
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
            <input class="input input-bordered join-item text-2xl w-full p-8" v-model="querySearchByCitation" @keydown.enter="handleSearchByCitation" data-typewriter="Search DOI or Title...;10.1016/j.bioorg.2020.103984..." type="text" required>
            <div class="indicator">
              <button type="submit" class="btn btn-primary h-full join-item" @click="handleSearchByCitation">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-10 w-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col md:hidden gap-2">
    <select v-model="searchFieldSelected" class="select select-bordered text-lg w-full">
      <option v-for="option in searchFieldOptions" :key="option.id" :value="option.value"><a>{{ option.text }}</a></option>
    </select>
    <div class="join w-full" v-if="searchFieldSelected === searchFieldOptions[0]['value']">
      <input class="input input-bordered join-item text-lg w-full" type="text" placeholder="Search Chemical" required v-model="querySearchByRepr" @keydown.enter="handleSearchByRepresentation">
      <div class="indicator">
        <button type="submit" class="btn btn-primary join-item" @click="handleSearchByRepresentation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-7 w-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="join w-full" v-if="searchFieldSelected === searchFieldOptions[1]['value']">
      <input class="input input-bordered join-item text-lg w-full" type="text" v-model="querySearchByCitation" @keydown.enter="handleSearchByCitation" placeholder="Search DOI or Title" required>
      <div class="indicator">
        <button type="submit" class="btn btn-primary join-item" @click="handleSearchByCitation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-7 w-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { defineProps } from 'vue';
  import { usePaginationStore } from '~/stores/paginationStore';
  
  const router = useRouter()
  
  const querySearchByRepr = ref('')
  const querySearchByCitation = ref('')

  const handleSearchByRepresentation = () => {
    if (querySearchByRepr.value !== '') {
      const paginationStore = usePaginationStore()
      paginationStore.setPage(1)

      router.push({
        path: '/chemicals/search',
        query: {
          type: 'simple',
          mode: 'summary',
          query: querySearchByRepr.value,
        }
      })
    }
  }

  const handleSearchByCitation = () => {
    if (querySearchByCitation.value !== '') {
      const paginationStore = usePaginationStore()
      paginationStore.setPage(1)

      router.push({
        path: '/chemicals/search',
        query: {
          type: 'simple',
          mode: 'summary',
          citation: querySearchByCitation.value,
        }
      })
    }
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
  
  
  defineProps({
    typewriterEffect: Boolean
  })
  
  class Typerwriter {
    constructor(el, options){
      this.el = el;
      this.words = [...this.el.dataset.typewriter.split(';')];
      this.speed = options?.speed || 100;
      this.delay = options?.delay || 1500;
      this.repeat = options?.repeat;
      this.initTyping();
    }
  
    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
    toggleTyping = () => this.el.classList.toggle('typing');
  
    async typewrite(word){
      await this.wait(this.delay);
      this.toggleTyping();
      let result = '|';
      for (const letter of word.split('')) {
        result = result.slice(0, result.length - 1) + letter + result.slice(result.length - 1, result.length);
        this.el.placeholder = result
        await this.wait(this.speed)
      }
      this.toggleTyping();
      await this.wait(this.delay);
      this.toggleTyping();
      while (this.el.placeholder.length !== 0){
        this.el.placeholder = this.el.placeholder.slice(0, -1);
        await this.wait(this.speed)
      }
      this.toggleTyping();
    }
    async initTyping() {
      for (const word of this.words){
        await this.typewrite(word);
      }
      if(this.repeat){
        await this.initTyping();
      } else {
        this.el.style.animation = 'none';
      }
    }
  }
  
  onMounted(() => {
    document.querySelectorAll('[data-typewriter]').forEach(el => {
      new Typerwriter(el, {
        repeat: true,
        speed: 50,
        delay: 1000
      })
    })
  })
</script>