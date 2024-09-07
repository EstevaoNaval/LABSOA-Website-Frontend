<template>

</template>

<script setup>
const emit = defineEmits(['closeModal'])

function closeModal() {
    emit('closeModal')
}
</script>