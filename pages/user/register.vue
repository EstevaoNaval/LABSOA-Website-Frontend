<template>
    <section class="flex h-screen bg-base-200">

        <div v-if="themeStore.isDarkMode" class="hidden md:flex md:flex-col w-1/2 p-12  justify-center bg-base-100 login-form-page-art-dark image-container"></div>
        <div v-else class="hidden md:flex md:flex-col w-1/2 p-12 justify-center bg-base-100 login-form-page-art-light image-container"></div>

        <div class="w-full md:w-1/2 flex flex-col pt-4 items-center md:justify-center gap-8">
            <NuxtLink to="/home" class="text-2xl text-primary hidden md:flex">
                <img src="~/assets/labsodb_logo_dark.webp" v-if="themeStore.isDarkMode" class="w-52 lg:w-64" />
                <img src="~/assets/labsodb_logo_light.webp" v-else class="w-52 lg:w-64" />
            </NuxtLink>
            <NuxtLink to="/home" class="text-lg text-primary md:hidden">
                <img src="~/assets/labsodb_logo_dark.webp" v-if="themeStore.isDarkMode" class="my-auto w-52" />
                <img src="~/assets/labsodb_logo_light.webp" v-else class="my-auto w-52" />
            </NuxtLink>
            <div class="mx-auto rounded-lg p-8 w-[90%] lg:w-3/4 max-w-md items-center bg-base-300">
                <register-form></register-form>
            </div>
        </div>
        
            
        
    </section>
</template>
  
<script setup>
import RegisterForm from '~/components/RegisterForm.vue';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore()

</script>

<style scoped>
.login-form-page-art-dark {
    background-image: url('~/assets/register_form_page_art_dark.webp');
}
.login-form-page-art-light {
    background-image: url('~/assets/register_form_page_art_light.webp');
}
.image-container {
  background-size: cover;
  background-position: center;
}
</style>