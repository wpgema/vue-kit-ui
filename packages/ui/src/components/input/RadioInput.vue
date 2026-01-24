<script setup>
import { computed } from "vue";
const props = defineProps({
    name: { type: String, required: true },
    label: { type: String, default: null },
    options: { type: Array, required: true },
    modelValue: { type: [String, Number, Boolean], default: "" },
    required: { type: Boolean, default: false },
    error: { type: String, default: null },
    horizontal: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);

const selectedValue = computed({
    get: () => props.modelValue,
    set: (val) => emit("update:modelValue", val)
});

const containerClass = computed(() =>
    props.horizontal
        ? "w-full flex items-center space-x-4 mb-3"
        : "w-full flex flex-col mb-3"
);
const optionsClass = computed(() =>
    props.horizontal ? "flex space-x-6" : "flex flex-col space-y-1"
);
</script>
<template>
    <div :class="containerClass">
        <label v-if="label" class="text-sm font-semibold text-gray-800 mb-1" :class="horizontal ? 'mb-0' : ''">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>
        <div :class="optionsClass" role="radiogroup">
            <label v-for="opt in options" :key="opt.value"
                class="flex items-center space-x-2 p-2 rounded-xl cursor-pointer transition-all duration-200 outline-none focus-within:ring-2 focus-within:ring-indigo-500"
                :class="{ 'bg-indigo-50': selectedValue === opt.value }">
                <input type="radio" class="sr-only" :name="name" :value="opt.value" v-model="selectedValue" />
                <div class="w-5 h-5 rounded-full border flex items-center justify-center bg-white"
                    :class="selectedValue === opt.value ? 'border-indigo-500' : 'border-gray-400'">
                    <div v-if="selectedValue === opt.value" class="w-3 h-3 bg-indigo-500 rounded-full" />
                </div>
                <span class="text-sm text-gray-700">{{ opt.label }}</span>
            </label>
        </div>
        <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
    </div>
</template>
