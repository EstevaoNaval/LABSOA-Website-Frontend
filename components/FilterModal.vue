<template>
    <dialog ref="filterModal" class="modal">
        <div class="modal-box p-4 rounded-3xl m-auto max-w-3xl">
            <FilterComponent @closeModal="closeModal" v-if="isFilterComponentModelOpened"></FilterComponent>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button @click="toggleFilterComponentModal()">close</button>
        </form>
    </dialog>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';

const FilterComponent = defineAsyncComponent({
    loader: () => import('./FilterComponent.vue')
});

var isFilterComponentModelOpened = ref(false)
var filterModal = ref(null)

const toggleFilterComponentModal = () => {
    isFilterComponentModelOpened.value = !isFilterComponentModelOpened.value

    if (isFilterComponentModelOpened.value) {
        filterModal.value.showModal()
    } 
}

const closeModal = () => {
    filterModal.value.close()
}

defineExpose({
    toggleFilterComponentModal
})
</script>