<script setup>
import { computed } from "vue";
const props = defineProps({
    label: String,
    modelValue: { type: Boolean, default: false },
    error: { type: [String, Boolean], default: false },
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String
});
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed({
    get: () => props.modelValue,
    set: (val) => {
        if (props.disabled || props.readonly) return;
        emit("update:modelValue", val);
    }
});

function handleClick(e) {
    if (props.readonly) {
        e.preventDefault();
    }
}
</script>
<template>
    <div class="w-full">
        <label :for="name" class="flex items-center gap-3 cursor-pointer"
            :class="(disabled || readonly) ? 'opacity-60 cursor-not-allowed' : ''">
            <div class="relative flex items-center justify-center w-5 h-5 rounded-md border transition-all duration-150"
                :class="disabled
                    ? 'border-gray-300 bg-gray-100'
                    : error
                        ? 'border-red-500'
                        : 'border-gray-400 hover:border-gray-600'">
                <input type="checkbox" :id="name" :name="name"
                    class="appearance-none absolute w-full h-full cursor-pointer rounded-md outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                    v-model="isChecked"
                    @click="handleClick"
                    :disabled="disabled" :readonly="readonly" />
                <svg v-if="isChecked" xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 text-white bg-gray-800 rounded-sm pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293A1 1 0 003.293 10.707l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                </svg>
            </div>
            <span v-if="label" class="text-sm font-medium text-gray-600"
                :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
                {{ label }}
            </span>
        </label>
        <p v-if="error" class="mt-1 text-xs text-red-500">
            {{ error }}
        </p>
    </div>
</template>
