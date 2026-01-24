<script>
export default {
    name: "Input",
    props: {
        label: String,
        placeholder: {
            type: String,
            default: "Masukkan teks...",
        },
        type: {
            type: String,
            default: "text",
        },
        value: [String, Number],
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
    },
    emits: ["update:value", "focus"],
    methods: {
        onInput(e) {
            this.$emit("update:value", e.target.value);
        },
    },
};
</script>
<template>
    <div class="w-full">
        <label v-if="label" :for="name" class="block mb-2 text-sm font-semibold text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <div class="flex items-center rounded-lg border px-3 py-2 transition" :class="error
                ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-500'
                : 'border-gray-300 focus-within:border-gray-200 focus-within:ring-2 focus-within:ring-gray-200'
            ">
            <input :name="name" :id="name" :type="type" :value="value" :readonly="readonly" :placeholder="placeholder"
                :disabled="disabled" @input="onInput" @focus="$emit('focus')"
                class="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-0" />
        </div>
        <p v-if="error" class="mt-1 text-xs text-red-500">
            {{ error }}
        </p>
    </div>
</template>
