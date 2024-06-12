<template>
  <div class='h-[48rem] max-w-3xl flex flex-col justify-center bg-base-200 p-4 rounded-xl' ref='ketcherContainer'>
    <iframe class="ketcher-iframe rounded-xl" ref='ketcherIFrame' v-if='isInView' :src='ketcherSrc' allowfullscreen></iframe>
    <div class="dropdown dropdown-hover max-w-44">
      <button role="button" tabindex="0" class="btn btn-circle w-44 text-lg flex flex-col bg-blue-500 text-md font-semisbold text-white px-4 mt-4 duration-200 hover:bg-blue-700">
        <p>Submit Search</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
      <div class="dropdown-content">
        <ul tabindex="0" class="dropdown-content z-[1] menu text-lg p-2 shadow bg-base-100 rounded-box w-auto">
          <li><a>Exact</a></li>
          <li><a>Similarity</a></li>
          <li><a>Substructure</a></li>
        </ul>
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