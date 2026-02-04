<script setup>
import { computed } from "vue";
const props = defineProps({
    modelValue: { type: Boolean, default: false },
    label: String,
    descriptionTrue: String,
    descriptionFalse: String,
    error: [String, Boolean],
    required: Boolean,
    horizontal: Boolean,
    name: String
});
const emit = defineEmits(["update:modelValue"]);

const internalValue = computed({
    get: () => props.modelValue,
    set: (val) => emit("update:modelValue", val)
});
</script>
<template>
    <div :class="horizontal ? 'flex items-center gap-2 mb-4' : 'flex flex-col mb-4'">
        <label
            :class="horizontal ? 'text-sm font-semibold text-gray-800 w-30' : 'text-sm font-semibold text-gray-800 mb-1'">
            {{ label }}
            <span v-if="required" class="text-red-500 ml-0.5">*</span>
        </label>
        <div class="flex flex-col">
            <label
                :class="horizontal ? 'relative inline-flex items-center cursor-pointer my-0' : 'relative inline-flex items-center cursor-pointer my-1'">
                <input :name="name" type="checkbox" role="switch" :aria-checked="internalValue" :aria-invalid="!!error"
                    class="sr-only peer" v-model="internalValue" />
                <div :class="[
                    'w-11 h-6 rounded-full transition peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500',
                    internalValue ? 'bg-indigo-600' : 'bg-gray-300'
                ]" />
                <div :class="[
                    'absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition',
                    internalValue ? 'translate-x-5' : 'translate-x-0'
                ]" />
                <span class="ml-3 text-sm text-gray-700" v-if="descriptionTrue || descriptionFalse">
                    {{ internalValue ? descriptionTrue : descriptionFalse }}
                </span>
            </label>
            <p v-if="error" class="text-xs text-red-500 mt-1">
                {{ error }}
            </p>
        </div>
    </div>
</template>
