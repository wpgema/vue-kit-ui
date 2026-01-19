<template>
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
        <div class="text-sm text-gray-700">
            Menampilkan <span class="font-medium">{{ pagination.from }}</span> sampai
            <span class="font-medium"> {{ pagination.to }}</span> dari
            <span class="font-medium"> {{ pagination.total }}</span> data
        </div>
        <div class="flex items-center gap-2">
            <span class="text-sm text-gray-700">Pilih Jumlah:</span>
            <div class="w-40">
                <Select
                    :value="pagination.per_page"
                    @update:value="(v) => handlePerPageChange(Number(v))"
                    :options="perPageOptions"
                    :placeholder="String(pagination.per_page)"
                />
            </div>
        </div>
        <div class="flex items-center">
            <button
                @click="() => handlePageChange(pagination.current_page - 1)"
                :disabled="pagination.current_page <= 1"
                :class="['flex items-center px-2 py-2 text-sm font-medium border transition-colors duration-200 rounded-l-md', pagination.current_page <= 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed border-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-gray-200']"
            >
                <ChevronsLeft :size="20" class="mr-1" />
            </button>
            <template v-for="(page, index) in pageNumbers" :key="index">
                <div>
                    <span v-if="page === '...'" class="px-4 py-2 border border-gray-200 bg-white text-gray-400">...</span>
                    <button
                        v-else
                        @click="() => handlePageChange(Number(page))"
                        :class="['px-4 py-2 text-sm font-medium border transition-colors duration-200', pagination.current_page === page ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-gray-200']"
                    >
                        {{ page }}
                    </button>
                </div>
            </template>
            <button
                @click="() => handlePageChange(pagination.current_page + 1)"
                :disabled="pagination.current_page >= pagination.last_page"
                :class="['flex items-center px-2 py-2 text-sm font-medium border transition-colors duration-200 rounded-r-md', pagination.current_page >= pagination.last_page ? 'bg-gray-50 text-gray-300 cursor-not-allowed border-gray-200' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-gray-200']"
            >
                <ChevronsRight :size="20" class="ml-1" />
            </button>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { ChevronsLeft, ChevronsRight } from 'lucide-vue-next';
import Select from '../elements/Select.vue';
const props = defineProps({
    pagination: { type: Object, required: true },
    onPageChange: { type: Function, required: true },
    onPerPageChange: { type: Function, required: true },
    onTransactionPage: { type: Boolean, default: false },
});
const perPageOptions = computed(() => {
    const opts = [
        { value: 5, label: '5' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 15, label: '15' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
    ];
    if (!props.onTransactionPage) {
        return opts.filter((o) => o.value !== 9);
    }
    return opts;
});
const pageNumbers = computed(() => {
    const pages = [];
    const maxVisiblePages = 5;
    const current_page = props.pagination.current_page || 1;
    const last_page = props.pagination.last_page || 1;
    if (last_page <= maxVisiblePages) {
        for (let i = 1; i <= last_page; i++) pages.push(i);
    } else {
        const startPage = Math.max(1, current_page - 2);
        const endPage = Math.min(last_page, current_page + 2);
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push('...');
        }
        for (let i = startPage; i <= endPage; i++) pages.push(i);
        if (endPage < last_page) {
            if (endPage < last_page - 1) pages.push('...');
            pages.push(last_page);
        }
    }
    return pages;
});
function handlePageChange(page) {
    if (page < 1) page = 1;
    if (page > (props.pagination.last_page || 1)) page = props.pagination.last_page || 1;
    props.onPageChange(page);
}
function handlePerPageChange(perPage) {
    props.onPerPageChange(perPage);
}
</script>