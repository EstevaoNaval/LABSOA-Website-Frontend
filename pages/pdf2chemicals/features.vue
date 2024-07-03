<template>
  <Head>
      <Title>Features | PDF2Chemicals</Title>
  </Head>
  
  <div data-aos="fade-up" class="mx-auto w-5/6 hidden lg:flex lg:flex-col py-16">
    <div class="space-y-2">
        <h1 class="text-6xl text-primary font-bold">
            PDF2Chemicals Features
        </h1>
        <h1 class="text-3xl font-semibold">
            Navigate through the many features of PDF2Chemicals
        </h1>
    </div>
  </div>

  <div data-aos="fade-up" class="mx-auto w-[90%] hidden md:flex md:flex-col lg:hidden py-16">
    <div class="space-y-2">
        <h1 class="text-6xl text-primary font-bold">
            PDF2Chemicals Features
        </h1>
        <h1 class="text-3xl font-semibold">
            Navigate through the many features of PDF2Chemicals
        </h1>
    </div>
  </div>

  <div data-aos="fade-up" class="mx-auto w-[90%] flex flex-col md:hidden py-8">
    <div class="space-y-2">
        <h1 class="text-2xl text-primary font-bold">
            PDF2Chemicals Features
        </h1>
        <h1 class="text-lg font-semibold">
            Navigate through the many features of PDF2Chemicals
        </h1>
    </div>
  </div>


</template>

<script setup>
import Scrollspy from '~/components/Scrollspy.vue';

const sections = ref([
  { id: 'identification', label: 'Identification' },
  { id: '', label: 'Section 2' },
  { id: 'section3', label: 'Section 3' },
])

</script>

<style>

</style>