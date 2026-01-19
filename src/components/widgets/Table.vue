<template>
    <div class="overflow-x-auto border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-4">No</th>
                    <th v-for="col in columns" :key="col.key"
                        class="px-4 py-2 font-semibold text-gray-600 text-xs uppercase tracking-wider">
                        {{ col.label }}
                    </th>
                    <th v-if="actions && actions.length" class="px-4 py-2 font-semibold text-gray-600 text-xs uppercase tracking-wider">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
                <tr v-if="loading">
                    <td :colspan="columns.length + 1 + (actions && actions.length ? 1 : 0)" class="px-4 py-6 text-center text-gray-400">
                        <LoadingDots />
                    </td>
                </tr>
                <template v-else-if="data.length > 0">
                    <tr v-for="(row, i) in data" :key="i" class="hover:bg-gray-50">
                        <td class="px-4">
                            {{ getRowNumber(i) }}
                        </td>
                        <td v-for="col in columns" :key="col.key" class="px-4 py-2 text-gray-700 whitespace-nowrap">
                            {{ row[col.key] ?? '-' }}
                        </td>
                        <td v-if="actions && actions.length" class="px-4 py-2">
                            <div class="flex items-center gap-2">
                                <Button
                                    v-for="(act, ai) in actions"
                                    :key="ai"
                                    :icon="act.icon"
                                    :content="act.label"
                                    :background="act.background"
                                    :to="act.to"
                                    :onClick="() => handleAction(act.name, row)"
                                />
                            </div>
                        </td>
                    </tr>
                </template>
                <tr v-else>
                    <td :colspan="columns.length + 1 + (actions && actions.length ? 1 : 0)" class="px-4 py-6 text-center text-gray-400">
                        Tidak ada data
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import LoadingDots from "./LoadingDots.vue";
import Button from "../elements/Button.vue";
export default {
    name: "Table",
    components: {
        LoadingDots,
        Button,
    },
    props: {
        columns: {
            type: Array,
            required: true,
        },
        data: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
        pagination: {
            type: Object,
            default: null,
        },
        actions: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        getRowNumber(i) {
            if (!this.pagination) return i + 1;
            return (this.pagination.current_page - 1) * this.pagination.per_page + i + 1;
        },
        handleAction(name, row) {
            this.$emit("action", { name, row });
        },
    },
};
</script>
