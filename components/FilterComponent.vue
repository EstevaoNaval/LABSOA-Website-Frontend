<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="mx-auto" v-for="data in histogramDataArr" :key="data.id">
            <div>
                <p class="text-lg font-semibold">{{ data.label }}</p>
                <div class="divider" ></div>
                <histogram-range-slider class="mx-auto"  :chem_prop_arr="data.data" :step="data.step"></histogram-range-slider>
            </div>
        </div>
    </div>
</template>

<script setup>
import HistogramRangeSlider from "~/components/HistogramRangeSlider.vue"
import { useChemicalPropertiesListStore } from "~/stores/chemicalPropertiesList"

const chemicalPropertiesListStore = useChemicalPropertiesListStore()

var histogramDataArr = ref([])

const emit = defineEmits(['closeModal'])

function closeModal() {
    emit('closeModal')
}

const loadChemPropsList = async () => {
    await chemicalPropertiesListStore.fetchAllChemicalProperties()

    histogramDataArr.value = [
        {
            id: 1,
            label: 'Molecular Weight, g/mol',
            data: chemicalPropertiesListStore.properties.molecular_weight,
            step: 25
        },
        {
            id: 2,
            label: 'Melting Point, ºC',
            data: [
                ...chemicalPropertiesListStore.properties.mp_lower_bound, 
                ...chemicalPropertiesListStore.properties.mp_upper_bound
            ],
            step: 10
        },
        {
            id: 3,
            label: 'Rotatable Bond Count',
            data: chemicalPropertiesListStore.properties.rotatable_bond,
            step: 1
        },
        {
            id: 4,
            label: 'H-Bond Donor Count',
            data: chemicalPropertiesListStore.properties.h_bond_donor,
            step: 1
        },
        {
            id: 5,
            label: 'H-Bond Acceptor Count',
            data: chemicalPropertiesListStore.properties.h_bond_acceptor,
            step: 1
        },
        {
            id: 6,
            label: 'JPLogP',
            data: chemicalPropertiesListStore.properties.jplogp,
            step: 1
        },
        {
            id: 7,
            label: 'Heavy Atom Count',
            data: chemicalPropertiesListStore.properties.heavy_atom,
            step: 1
        },
        {
            id: 8,
            label: 'Polar Area, Å²',
            data: chemicalPropertiesListStore.properties.tpsa,
            step: 10
        },
    ]
}



onMounted(() => {
    loadChemPropsList()
})
</script>