import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filterStore', {
    state: () => ({
        filters: {
            exact: {
                query: '',
                citation: '',
                doi: '',
                title: ''
            },
            range: {
                jplogp: {
                    gte: null,
                    lte: null
                },
                molecular_weight: {
                    gte: null,
                    lte: null
                },
                tpsa: {
                    gte: null,
                    lte: null
                },
                mp_lower_bound: {
                    gte: null,  // gte for melting point
                },
                mp_upper_bound: {
                    lte: null,
                },
                // Add date ranges here
                publication_date: {
                    after: null,  // gte for date
                    before: null  // lte for date
                }
            }
        }
    }),
    getters: {
        getFilterParams() {
            const params = {}; 
            
            // Exact filters
            Object.entries(this.filters.exact).forEach(([key, value]) => {
                if (value) {
                    params[key] = value;  // e.g., { doi: '10.1000/xyz123' }
                }
            });
             
            // Range filters
            Object.entries(this.filters.range).forEach(([key, range]) => {
                if (range.gte !== null) {
                    params[`${key}__gte`] = range.gte;
                }
                if (range.lte !== null) {
                    params[`${key}__lte`] = range.lte;
                } 
                
                // Special case for dates
                if (key === 'publication_date') {
                    if (range.after !== null) {
                        params['publication_date_after'] = range.after;
                    }
                    if (range.before !== null) {
                        params['publication_date_before'] = range.before;
                    }
                }
            });

            return params;
        }
    },
    actions: {
        setExactFilter(name, value) {
            this.filters.exact[name] = value;
        },    
        setRangeFilter(name, type, value) {  
            if (name === 'publication_date') {
                if (type === 'after') {
                    this.filters.range.date.after = value;
                } else if (type === 'before') {
                    this.filters.range.date.before = value;
                }
            } else {
                if (type === 'gte') {
                    this.filters.range[name].gte = value;
                } else if (type === 'lte') {
                    this.filters.range[name].lte = value;
                }
            }
        },    
        clearFilter() {
            this.filters = {
                exact: {
                    query: '',
                    citation: '',
                    doi: '',
                    title: ''
                },
                range: {
                    logP: {
                        gte: null,
                        lte: null
                    },
                    molecularWeight: {
                        gte: null,
                        lte: null
                    },
                    tpsa: {
                        gte: null,
                        lte: null
                    },
                    mp_lower_bound: {
                        gte: null,
                    },
                    mp_upper_bound: {
                        lte: null,
                    },
                    date: {
                        after: null,
                        before: null
                    }
                }
            };
        }
    },
    persist: true,
});
