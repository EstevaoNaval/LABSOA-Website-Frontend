<template>
    <div class="bg-base-200 shadow-lg text-primary font-semibold">
        <ul class="menu menu-horizontal text-lg hidden md:flex">
            <li>
                <a class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About
                </a>
            </li>
            <li>
                <div class="dropdown dropdown-hover m-auto flex flex-col">
                    <div class="flex" tabindex="0" role="button">
                        PDF2Chemicals
                    </div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 rounded-box bg-base-200 mt-10 mx-auto">
                        <li>
                            <NuxtLink class="flex" to="/pdf2chemicals/about">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>About</p>
                            </NuxtLink>
                        </li>
                        <li>
                            <a class="flex" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <p>Submit</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="" class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                </a>
            </li>
            <li>
                <a class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                    Web API
                </a>
            </li>
            
            <div class="flex ml-auto">
                <li class="my-auto">
                    <label class="btn btn-ghost btn-circle swap swap-rotate">    
                        <!-- this hidden checkbox controls the state -->
                        <input type="checkbox" class="theme-controller" :checked="isNightTheme" @change="toggleTheme"/>
                        <!-- sun icon -->
                        <svg class="swap-on fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        <!-- moon icon -->
                        <svg class="swap-off fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    </label>
                </li>
                <li class="my-auto">
                    <a href="/" class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Sign In
                    </a>
                </li>
            </div>
        </ul>

        <ul class="flex menu menu-horizontal text-lg md:hidden lg:hidden">
            <li class="ml-auto my-auto">
                <label class="btn btn-ghost btn-circle swap swap-rotate text-primary">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller" :checked="isNightTheme" @change="toggleTheme"/>
                    <!-- sun icon -->
                    <svg class="swap-on fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <!-- moon icon -->
                    <svg class="swap-off fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
            </li>
            <li class="my-auto">
                <a href="/" class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Sign In
                </a>
            </li>
        </ul>
        
    </div>
    <div class="navbar bg-base-100 shadow-xl">
        <div class="navbar-start">
            <details class="dropdown md:hidden">
                <summary ref="menuSummary" @click="toggleDetailsSwapCheckbox()" tabindex="0" role="button" class="btn btn-ghost swap swap-rotate text-primary">
                    <input type="checkbox" ref="menuDetailsSwapCheckbox" />

                    <svg class="swap-on fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" stroke-width="2.5" viewBox="0 0 512 512">
                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="swap-off fill-current h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>    
                </summary>                    

                <ul tabindex="0" class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold text-primary">
                    <li>
                        <a class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            About
                        </a>
                    </li>
                    <li>
                        <details class="flex my-auto">
                            <summary>PDF2Chemicals</summary>
                            <ul class="p-2">
                                <li>
                                    <NuxtLink to="/pdf2chemicals/about">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        About
                                    </NuxtLink>
                                </li>
                                <li>
                                    <a class="flex" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                        <p>Submit</p>
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="" class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download
                        </a>
                    </li>
                    <li>
                        <a class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                            Web API
                        </a>
                    </li>
                </ul>
            </details>

            <NuxtLink to="/home" class="btn btn-ghost text-2xl text-primary hidden md:flex">LabSOADB</NuxtLink>
        </div>
        <div class="navbar-center">
            <NuxtLink to="/home" class="btn btn-ghost text-lg text-primary md:hidden">LabSOADB</NuxtLink>
        </div>
        <div class="navbar-end">
            <div class="hidden md:flex">
                <div class="flex flex-col">
                    <div class="join">
                        <input class="input input-bordered join-item text-lg w-72" type="text" placeholder="Search Chemical" required>
                        <div class="indicator">
                          <button type="submit" class="btn btn-primary join-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 m-auto">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                          </button>
                        </div>
                    </div>
                    <div class="flex text-md font-semibold gap-2">
                        <a class="link link-primary" @click="openKetcherModal()">Draw Structure</a>
                        <a href="" class="link link-primary">Advanced Search</a>
                    </div>
                </div>              
            </div>
            <div class="flex text-primary md:hidden lg:hidden">    
                <button type="button" class="btn btn-ghost btn-circle" @click="toggleSearchBar()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div class="bg-base-200 shadow-md font-semibold">
        <div class="md:hidden">
            <transition 
            name="collapse"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            @after-leave="afterLeave"
            >   
                <div v-show="isSearchBarVisible" class="collapsible">
                    <ul class="flex menu menu-horizontal">
                        <div class="m-auto flex flex-col">
                            <div class="join">
                                <input class="input input-bordered join-item text-md w-64" type="text" placeholder="Search Chemical" required>
                                <div class="indicator">
                                  <button type="submit" class="btn btn-primary join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-6 w-6 m-auto">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                  </button>
                                </div>
                            </div>
                            
                            <div class="flex text-sm font-semibold gap-2">
                                <a href="" class="link link-primary">Advanced Search</a>
                            </div>
                        </div>
                    </ul>
                </div>
            </transition>
        </div>
        
    </div>
    <ketcher-modal ref="ketcherModalRef"></ketcher-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useThemeStore } from '~/stores/theme';
import KetcherModal from '~/components/KetcherModal.vue';

const themeStore = useThemeStore();
const isNightTheme = computed(() => themeStore.currentTheme === 'night');

var ketcherModalRef =  ref(null)

var isSearchBarVisible = ref(false)
var menuDetailsSwapCheckbox = ref(null)

const openKetcherModal = () => {
    if(ketcherModalRef.value) {
        ketcherModalRef.value.toggleKetcherComponentModal()
    }
}

const toggleDetailsSwapCheckbox = () => {
    menuDetailsSwapCheckbox.value.checked = !menuDetailsSwapCheckbox.value.checked
} 

const toggleSearchBar = () => {
    isSearchBarVisible.value = !isSearchBarVisible.value
}

const enter = (el) => {
    el.style.height = '0';
    el.style.overflow = 'hidden';
    el.style.transition = 'height 0.5s ease';
    requestAnimationFrame(() => {
      el.style.height = el.scrollHeight + 'px';
    });
}

const afterEnter = (el) => {
    el.style.height = 'auto';
}

const leave = (el) => {
    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      el.style.transition = 'height 0.5s ease';
      el.style.height = '0';
    });
}

const afterLeave = (el) => {
    el.style.height = 'auto';
}

const toggleTheme = () => {
  const newTheme = isNightTheme.value ? 'autumn' : 'night';
  themeStore.setTheme(newTheme);
};
</script>

<style scoped>
    .collapsible {
        overflow: hidden;
    }

</style>