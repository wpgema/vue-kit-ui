<script setup>
const props = defineProps({
    modelValue: { type: String, default: "" },
    label: String,
    error: [String, Boolean],
    name: String,
    required: Boolean,
    className: { type: String, default: "" },
    rows: { type: Number, default: 4 },
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
});
const emit = defineEmits(["update:modelValue", "input", "change", "blur", "focus"]);

function onInput(e) {
    emit("update:modelValue", e.target.value);
    emit("input", e);
}
</script>
<template>
    <div class="flex flex-col w-full">
        <label v-if="label" :for="name" class="block mb-3 text-sm font-semibold text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <textarea :id="name" :name="name" :value="modelValue" :rows="rows" :placeholder="placeholder"
            :disabled="disabled" :readonly="readonly"
            @input="onInput"
            @change="$emit('change', $event)"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)"
            class="resize-none p-2 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
            :class="className"></textarea>
        <span v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</span>
    </div>
</template>
