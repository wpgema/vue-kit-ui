<script setup>
const props = defineProps({
    modelValue: { type: [String, Number], default: "" },
    label: String,
    placeholder: {
        type: String,
        default: "Type something...",
    },
    type: {
        type: String,
        default: "text",
    },
    error: {
        type: [String, Boolean],
        default: false,
    },
    icon: [String, Object],
    iconPosition: {
        type: String,
        default: "left",
    },
    required: Boolean,
    readonly: Boolean,
    name: String,
    disabled: Boolean,
});

const emit = defineEmits(["update:modelValue", "focus", "blur"]);

function onInput(e) {
    emit("update:modelValue", e.target.value);
}
</script>
<template>
    <div class="w-full">
        <label v-if="label" :for="name" class="block mb-2 text-sm font-semibold text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <div class="flex items-center rounded-lg border px-3 py-2 bg-white" :class="error
            ? 'border-red-500 focus-within:border-transparent focus-within:ring-2 focus-within:ring-red-500'
            : 'border-gray-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-gray-200'
            ">
            <input :name="name" :id="name" :type="type" :value="modelValue" :readonly="readonly" :placeholder="placeholder"
                :disabled="disabled" @input="onInput" @focus="$emit('focus')" @blur="$emit('blur')"
                class="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none" />
        </div>
        <p v-if="error" class="mt-1 text-xs text-red-500">
            {{ error }}
        </p>
    </div>
</template>
