import { defineStore } from 'pinia';

export const useSortStore = defineStore('sort', {
    state: () => ({
        currSortOptionId: 0,
        ascDirection: true,
        sortOptions: [
            {
                id: 0,
                name: 'Relevance',
                value: '',
            },
            {
                id: 1,
                name: 'Chemical ID',
                value: 'api_id'
            },
            {
                id: 2,
                name: 'Molecular Weight',
                value: 'physical_properties__molecular_weight'
            },
            {
                id: 3,
                name: 'Melting Point',
                value: 'physical_properties__mp_lower_bound'
            },
            {
                id: 4,
                name: 'H-Bond Acceptor Count',
                value: 'physical_properties__count_h_bond_acceptor'
            },
            {
                id: 5,
                name: 'H-Bond Donor Count',
                value: 'physical_properties__count_h_bond_donor'
            },
            {
                id: 6,
                name: 'Heavy Atom Count',
                value: 'physical_properties__count_heavy_atom'
            },
            {
                id: 7,
                name: 'Polar Area',
                value: 'physicochemical_properties__tpsa'
            },
            {
                id: 8,
                name: 'Rotatable Bond Count',
                value: 'physical_properties__count_rotatable_bond'
            },
            {
                id: 9,
                name: 'JPLogP',
                value: 'partition_coefficients__jplogp'
            },
            {
                id: 10,
                name: 'Create Date',
                value: 'created_at'
            },
        ]
    }),
    actions: {
        setCurrSortOptionId(sortOptionId) {
            this.currSortOptionId = sortOptionId
        },
        setSortDirection(sortDirection) {
            this.sortDirection = sortDirection;
        },
        getCurrSortOption() {
            return this.ascDirection === true ? this.sortOptions[this.currSortOptionId].value : '-' + this.sortOptions[this.currSortOptionId].value
        },
        toggleSortDirection() {
            this.ascDirection = !this.ascDirection;
        }
    },
    persist: true
});