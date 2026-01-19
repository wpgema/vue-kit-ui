<script setup>
import { ref, watch } from "vue";
const props = defineProps({
    modelValue: { type: String, default: "" },
    label: String,
    error: [String, Boolean],
    name: String,
    required: Boolean,
    className: { type: String, default: "" },
    rows: { type: Number, default: 4 },
    placeholder: String
});
const emit = defineEmits(["update:modelValue"]);
const internalValue = ref(props.modelValue);
watch(() => props.modelValue, (val) => {
    internalValue.value = val;
});
function updateValue(e) {
    internalValue.value = e.target.value;
    emit("update:modelValue", internalValue.value);
}
</script>
<template>
    <div class="flex flex-col w-full">
        <label v-if="label" :for="name" class="block mb-3 text-sm font-semibold text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <textarea :id="name" :name="name" v-model="internalValue" :rows="rows" :placeholder="placeholder"
            @input="updateValue"
            class="resize-none p-2 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            :class="className"></textarea>
        <span v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</span>
    </div>
</template>
