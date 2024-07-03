<template>
  <div class="scrollspy-container">
    <ul class="scrollspy-list">
      <li
        v-for="section in sections"
        :key="section.id"
        :class="{ active: activeSection.value === section.id }"
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { debounce } from 'lodash';

defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const activeSection = ref(null);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

const onScroll = debounce(() => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  const sectionsElements = sections.map((section) => document.getElementById(section.id));

  for (const section of sectionsElements) {
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      activeSection.value = section.id;
      break;
    }
  }
}, 100);

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll(); // Initialize the active section on mount
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.active {
  background: #007bff;
  color: white;
}
</style>
