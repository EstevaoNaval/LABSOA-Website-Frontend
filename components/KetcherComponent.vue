<template>
  <div class='h-[48rem] flex flex-col justify-center bg-base-100'>
    
    <iframe class="ketcher-iframe rounded-xl" ref='ketcherIFrame' v-if='isInView' :src='ketcherSrc' allowfullscreen></iframe>
    
    <form action="" method="post" class="flex mt-4 max-w-auto">
      <div class="flex flex-col m-auto font-semibold">
        <div v-if="searchSelected === searchOptions[1].value" class="flex m-auto max-w-auto">
          <div class="flex flex-col">
            <label for="rangeid" class="my-auto text-sm font-semibold">Tanimoto Similarity</label>
            <input v-model="inputSimilarityPercent" min="0" max="100" id="rangeid" type="range" class="range range-primary w-64" />
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="m-auto text-primary flex font-semibold text-3xl gap-1">
            <input v-model="inputSimilarityPercent" type="number" min="0" max="100" class="max-w-14 text-center" /><p>%</p>
          </div>
        </div>
        <label class="cursor-pointer label mr-auto gap-2" v-if="searchSelected !== searchOptions[1].value">
          <input type="checkbox" class="checkbox checkbox-primary" />
          <span class="label-text text-lg text-primary">Match Tautomers</span>
        </label>
      </div>
    
      <div class="join flex ml-auto">
        <select v-model="searchSelected" class="join-item select select-bordered font-semibold text-primary text-lg" required>
          <option class="font-semibold" value="" disabled selected>Search Type</option>
          <option class="font-semibold" v-for="option in searchOptions" :key="option.id" :value="option.value"><a>{{ option.text }}</a></option>
        </select>
        <div class="indicator">
          <button type="submit" class="btn btn-primary join-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 m-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  }
});

const inputSimilarityPercent = defineModel("similarityPercent")
inputSimilarityPercent.value = 90

const searchSelected = defineModel("searchSelected")
searchSelected.value = "exactSelected"

const searchOptions = ref([
  { id: 0, value: "exactSearchOption", text: "Exact" },
  { id: 1, value: "similaritySearchOption", text: "Similarity" },
  { id: 2, value: "substructureSearchOption", text: "Substructure" }
])

const isInView = ref(true);
const ketcherSrc = computed(() => props.src);

var ketcherIFrame = ref(null)
var ketcherContentWindow = null

onMounted(() => {
  ketcherContentWindow = ketcherIFrame.value.contentWindow
})

const { $axios } = useNuxtApp()

const getSmiles = () => {
  return ketcherContentWindow.ketcher
  .getSmiles()
  .then((smiles) => smiles)
  .catch((err) => {
    console.error(err);
    return "";
  })
}

const sendSmiles = async () => {
  try {
    const response = await $axios.post(props.endpoint, {
      data: getSmiles()
    });
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

defineExpose({ sendSmiles })
</script>

<style scoped>
.ketcher-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>