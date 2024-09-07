export const filterDefinitions = {
    doi: {
        name: 'DOI',
        type: 'text',
        default: '',
    },
    title: {
        name: 'Title',
        type: 'text',
        default: '',
    },
    publication_date: {
        name: 'Publication Date',
        type: 'text',
        default: '',
    },
    
    
    
    molecular_weight__gte: {
        name: 'Molecular Weight Min',
        type: 'number',
        default: null
    },
    molecular_weight__lte: {
        name: 'Molecular Weight Max',
        type: 'number',
        default: null
    },
    volume__gte: {
        name: 'Volume Min',
        type: 'number',
        default: null
    },
    volume__lte: {
        name: 'Volume Max',
        type: 'number',
        default: null
    },
    density__gte: {
        name: 'Density Min',
        type: 'number',
        default: null
    },
    density__lte: {
        name: 'Density Max',
        type: 'number',
        default: null
    },
    count_atom__gte: {
        name: 'Count Atom Min',
        type: 'number',
        default: null
    },
    count_atom__lte: {
        name: 'Count Atom Max',
        type: 'number',
        default: null
    }
    // Add more filters as necessary
};
  