<script setup>
import { ChevronRight } from "lucide-vue-next";

defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="flex justify-between items-center">
        <!-- Left -->
        <div>
            <h3 class="text-slate-400 text-base">{{ subtitle }}</h3>
            <h1 class="text-gray-900 text-lg font-semibold">{{ title }}</h1>
        </div>

        <!-- Right breadcrumb -->
        <h3 class="text-sm font-semibold flex">
            <div class="text-slate-400 font-medium">Beranda</div>
            <ChevronRight class="inline mt-1 mx-1" :size="12" />
            {{ title }}
        </h3>
    </div>
</template>
