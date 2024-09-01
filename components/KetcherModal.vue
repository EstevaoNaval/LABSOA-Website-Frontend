<template>
    <dialog ref="drawStructureModal" class="modal">
        <div class="modal-box p-4 rounded-3xl m-auto max-w-3xl">
            <KetcherComponent @closeModal="closeModal" v-if="isKetcherComponentModelOpened"></KetcherComponent>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button @click="toggleKetcherComponentModal()">close</button>
        </form>
    </dialog>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';

const KetcherComponent = defineAsyncComponent({
    loader: () => import('./KetcherComponent.vue')
});

var isKetcherComponentModelOpened = ref(false)
var drawStructureModal = ref(null)

const toggleKetcherComponentModal = () => {
    isKetcherComponentModelOpened.value = !isKetcherComponentModelOpened.value

    if (isKetcherComponentModelOpened.value) {
        drawStructureModal.value.showModal()
    } 
}

const closeModal = () => {
    drawStructureModal.value.close()
}

defineExpose({
    toggleKetcherComponentModal
})
</script>

<style>

</style>