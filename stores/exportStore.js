import { defineStore } from 'pinia';
import { useFilterStore } from './filterStore'
import { useAuthStore } from './auth';

export const useExportStore = defineStore('export', {
    state: () => ({
        currExportFormatId: 0,
        exportFormats: [
            {
                id: 0,
                name: 'CSV',
                value: 'csv'
            },
            {
                id: 1,
                name: 'XLSX',
                value: 'xlsx'
            },
            {
                id: 2,
                name: 'XLS',
                value: 'xls'
            },
            {
                id: 3,
                name: 'ODS',
                value: 'ods'
            },
            {
                id: 4,
                name: 'JSON',
                value: 'json'
            },
            {
                id: 5,
                name: 'HTML',
                value: 'html'

            }
        ]
    }),
    actions: {
        setCurrExportFormatId(exportFormatId) {
            this.currExportFormatId = exportFormatId
        },
        getCurrExportFormatValue() {
            return this.exportFormats[this.currExportFormatId]['value']
        },
        async fetchChemicalsExport() {
            const config = useRuntimeConfig()
            const { $axios } = useNuxtApp()

            const filterStore = useFilterStore()
            const authStore = useAuthStore()

            let filters = filterStore.getFilterParams

            let params = {
                ...filters,
            }

            let response = await $axios.get(config.public.exportChemicalEndpoint + `${this.getCurrExportFormatValue()}/`,
                {
                    params: params,
                    headers: { Authorization: `Bearer ${authStore.token}` },
                    responseType: 'blob',
                }
            )

            return response
        },
        async downloadChemicalsExport() {
            const response = await this.fetchChemicalsExport()

            const filename = this.getFilenameFromContentDisposition(response.headers['content-disposition'])

            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;

            link.setAttribute('download', filename); //or any other extension
            document.body.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        },
        getFilenameFromContentDisposition(contentDisposition) {
            return contentDisposition.match(/filename="?([^"]+)"?/)[1];
        }
    },
    persist: true
});