<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed } from "vue";

const props = defineProps({
    label: String,
    name: String,
    modelValue: [String, Number],
    valueLabel: String,
    placeholder: { type: String, default: "Select option..." },
    options: { type: Array, required: true },
    required: Boolean,
    error: String,
    filter: Boolean
});
const emit = defineEmits(["update:modelValue"]);
const open = ref(false);

const selectedLabel = computed(() => {
    if (props.valueLabel) return props.valueLabel;
    const found = props.options.find((o) => o.value === props.modelValue);
    return found ? found.label : "";
});

const container = ref(null);

function handleSelect(val) {
    emit("update:modelValue", val);
    open.value = false;
}
function onClickOutside(e) {
    if (!container.value?.contains(e.target)) {
        open.value = false;
    }
}
function toggle() {
    open.value = !open.value;
}
function onKeydown(e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
    }
    if (e.key === "Escape") {
        open.value = false;
    }
}

onMounted(() => {
    document.addEventListener("mousedown", onClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener("mousedown", onClickOutside);
});
</script>
<template>
    <div class="w-full relative" ref="container">
        <label
            v-if="label"
            :for="name"
            class="block mb-3 text-sm font-semibold text-gray-800"
        >
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>
        <input type="hidden" :name="name" :value="modelValue || ''" />
        <div
            role="combobox"
            :aria-expanded="open"
            aria-haspopup="listbox"
            tabindex="0"
            @mousedown.prevent="toggle"
            @keydown="onKeydown"
            class="relative flex w-full items-center justify-between rounded-lg border px-3 py-2 bg-white cursor-pointer
                transition-all outline-none focus:ring-2 focus:ring-indigo-500
                "
            :class="{
                'border-red-300 ring-1 ring-red-200': error,
                'ring-2 ring-indigo-200 border-indigo-400': open && !error,
                'border-gray-300 hover:border-gray-400': !open && !error
            }"
        >
            <span
                class="text-sm"
                :class="
                    selectedLabel
                        ? 'text-gray-900'
                        : 'text-gray-400'
                "
            >
                {{ selectedLabel || placeholder }}
            </span>
            <svg
                v-if="filter"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <div
                v-else
                class="ml-2 h-5 w-5 transition-transform duration-200"
                :class="{ 'rotate-180': open }"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 text-gray-400"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div
            v-if="open"
            role="listbox"
            class="absolute mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg z-10 max-h-60 overflow-auto"
        >
            <div
                v-for="opt in options"
                :key="opt.value"
                role="option"
                :aria-selected="modelValue === opt.value"
                class="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                :class="{
                    'bg-indigo-50 text-indigo-600': modelValue === opt.value,
                    'text-gray-700': modelValue !== opt.value
                }"
                @mousedown.prevent.stop="handleSelect(opt.value)"
            >
                {{ opt.label }}
            </div>
        </div>
        <p v-if="error" class="mt-1 text-sm text-red-600">
            {{ error }}
        </p>
    </div>
</template>
