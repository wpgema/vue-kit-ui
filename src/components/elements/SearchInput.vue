<script setup>
import { Search } from "lucide-vue-next";
const props = defineProps({
    label: { type: String, default: null },
    name: { type: String, default: null },
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "Cari..." },
    onKeyDown: { type: Function, default: null },
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
    <div class="w-full relative">
        <label v-if="label" :for="name" class="block mb-1 text-sm font-semibold text-gray-700">
            {{ label }}
        </label>
        <div class="relative w-full">
            <input type="text" :id="name" :name="name" :value="modelValue" :placeholder="placeholder"
                @input="emit('update:modelValue', $event.target.value)" @keydown="onKeyDown?.($event)"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 pr-10" />
            <Search class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
    </div>
</template>
