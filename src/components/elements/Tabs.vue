<script setup>
import { ref, computed, watch, defineSlots } from "vue";
const props = defineProps({
    tabs: { type: Array, required: true },
    modelValue: { type: String, required: true }
});
const emit = defineEmits(["update:modelValue"]);
const activeKey = ref(props.modelValue);
watch(() => props.modelValue, (val) => {
    activeKey.value = val;
});
function changeTab(key) {
    activeKey.value = key;
    emit("update:modelValue", key);
}
</script>
<template>
    <div class="w-full">
        <div class="flex border-b border-gray-200">
            <button v-for="tab in tabs" :key="tab.key" @click="changeTab(tab.key)"
                class="px-4 py-2 -mb-px font-medium text-sm border-b-2 transition" :class="activeKey === tab.key
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'">
                {{ tab.label }}
            </button>
        </div>
        <div class="mt-4">
            <slot :name="activeKey"></slot>
        </div>
    </div>
</template>
