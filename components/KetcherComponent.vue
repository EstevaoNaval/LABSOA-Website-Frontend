<template>
  <div class='h-[48rem] max-w-3xl flex flex-col justify-center bg-base-200' ref='ketcherContainer'>
    <iframe class="ketcher-iframe rounded-xl" ref='ketcherIFrame' v-if='isInView' :src='ketcherSrc' allowfullscreen></iframe>
    <div class="flex mt-4 max-w-auto">
      <div class="join flex">
        <select v-model="searchSelected" class="join-item select select-bordered text-semibold text-lg" required>
          <option value="exactSelected"><a>Exact</a></option>
          <option :value="similaritySearchOptionValue"><a>Similarity</a></option>
          <option value="substructureSelected"><a>Substructure</a></option>
        </select>
        <div class="indicator">
          <button class="btn btn-primary join-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 m-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="searchSelected === similaritySearchOptionValue" class="flex m-auto max-w-auto">
        <div class="flex flex-col">
          <label for="rangeid" class="my-auto text-sm font-semibold">Tanimoto Similarity</label>
          <input v-model="similarityPorcent" id="rangeid" type="range" min="0" max="100" class="range range-primary w-64" />
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="m-auto text-primary flex font-bold text-3xl">
          <p>{{ similarityPorcent + '%' }}</p>
        </div>
      </div>
      
    </div>
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

const similarityPorcent = defineModel("similarityPorcent")
// Default value
similarityPorcent.value = 80

const searchSelected = defineModel("searchSelected")
searchSelected.value = "exactSelected"

const similaritySearchOptionValue = 'similaritySelected'

const ketcherContainer = ref(null);
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
</style>