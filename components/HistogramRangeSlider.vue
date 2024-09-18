<template>
  <div class="flex flex-col gap-6">
    <HistogramSlider
      class="range-slider"
      :style="rangeSliderStyle"
      :width="300"
      :barWidth="8"
      :data="chem_prop_arr"
      :drag-interval="false"
      :force-edges="false"
      :grid="false"
      :hideFromTo="true"
      :primaryColor="primaryColor"
      :holderColor="holderColor"
      :handleSize="mediumHandleSize"
      :barRadius="mediumRoundRadius"
      :min="minValue"
      :max="maxValue"
      :from="selectedRange.from"
      :to="selectedRange.to"
      :step="props.step"
      :clip="false"
      :histSliderGap="6"
      :lineHeight="24"
      @finish="handleRangeSliderSelectFinish"
      @change="handleRangeSliderSelectChange"
    />
    <div class="flex">
      <div class="flex flex-col mr-auto">
        <p>Min</p>
        <select v-model="selectedMinRange" class="select select-sm select-bordered font-semibold text-lg">
          <option v-for="[index, value] of minRangeArr.entries()" :key="index" :value="value">{{ value }}</option>
        </select>
      </div>
      <div class="flex flex-col ml-auto">
        <p>Max</p>
        <select v-model="selectedMaxRange" class="select select-sm select-bordered font-semibold text-lg">
          <option v-for="[index, value] of maxRangeArr.entries()" :key="index" :value="value">{{ value }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
  import { computed, watch } from "vue";
  import { useThemeStore } from "~/stores/theme";
  import HistogramSlider from "vue3-histogram-slider-v2";
  import "vue3-histogram-slider-v2/dist/histogram-slider.css";

  const themeStore = useThemeStore()

  const mediumHandleSize = 24
  const mediumRoundRadius = 2
  const primaryColor = themeStore.isDarkMode ? "#38bdf8" : '#0069ff'
  const holderColor = themeStore.isDarkMode ? "#21293b" : '#ebedf0'
  const rangeSliderStyle = computed(() => ({
    '--range-slider-handle-border': themeStore.isDarkMode ? '3px solid #38bdf8' : '3px solid #0069ff',
    '--range-slider-handle-background-color': themeStore.isDarkMode ? '#0f172a' : '#ffffff'
  }))

  const props = defineProps({
    step: {
      type: Number,
      required: true
    },
    chem_prop_arr: {
      type: Array,
      required: true
    },
  })

  const chem_prop_arr = props.chem_prop_arr.map((value) => Math.round(value))

  const createArrFromMinToMaxByStep = (min, max, step) => {
    let result = []

    for (let i = min; i <= max; i += step) {
      result.push(i)
    }

    if(result[result.length - 1] != max) {
      result.push(max)
    }

    return result
  }

  const isTenMultiple = (number) => { number % 10 === 0 }

  const roundToFlooringTen = (number) => {
    return isTenMultiple(number) ? number : Math.floor(number / 10) * 10
  }

  const roundToCeilingTen = (number) => {
    return isTenMultiple(number) ? number : Math.ceil(number / 10) * 10
  }

  const handleRangeSliderSelectChange = (event) => {
    selectedMinRange.value = event.from
    selectedMaxRange.value = event.to
  }

  const handleRangeSliderSelectFinish = (event) => {
    selectedRange.from = event.from
    selectedRange.to = event.to
  }

  var minValue = Math.min(...chem_prop_arr)
  minValue = minValue >= 100 ? roundToFlooringTen(minValue) : minValue

  var maxValue = Math.max(...chem_prop_arr)
  maxValue = maxValue >= 100 ? roundToCeilingTen(maxValue) : maxValue

  var selectedRange = ref({
    from: minValue,
    to: maxValue,
  })

  var minRangeArr = ref(createArrFromMinToMaxByStep(selectedRange.value.from, selectedRange.value.to, props.step))
  var maxRangeArr = ref(createArrFromMinToMaxByStep(selectedRange.value.from, selectedRange.value.to, props.step).reverse())

  const selectedMinRange = ref(minRangeArr.value[0])
  const selectedMaxRange = ref(maxRangeArr.value[0])

  watch(selectedMinRange, () => {
    selectedRange.value.from = selectedMinRange.value
    maxRangeArr = ref(createArrFromMinToMaxByStep(selectedRange.value.from, maxValue, props.step).reverse())
  })

  watch(selectedMaxRange, () => {
    selectedRange.value.to = selectedMaxRange.value
    minRangeArr = ref(createArrFromMinToMaxByStep(minValue, selectedRange.value.to, props.step))
  })
</script>

<style>
  .irs-handle {
    -webkit-appearance: none;
    appearance: none;
    border: var(--range-slider-handle-border);
    transform: translateY(1.1rem);
    background-color: var(--range-slider-handle-background-color) !important;
  }
  .irs-bar,.irs-line {
    -webkit-appearance: none;
    appearance: none;
  }
  .irs-line {
    -webkit-appearance: none;
    appearance: none;
    height: .5rem !important;
    transform: translateY(.5rem);
  }
</style>