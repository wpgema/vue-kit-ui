<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
    variant: {
        type: String,
        default: "primary",
        validator: (value) => ["primary", "secondary", "danger", "outline", "yellow"].includes(value),
    },
    size: {
        type: String,
        default: "md",
        validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-md";

const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    yellow: "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
};

const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base",
};

const classes = computed(() => {
    return [
        baseClasses,
        variantClasses[props.variant] || variantClasses.primary,
        sizeClasses[props.size] || sizeClasses.md,
        props.disabled ? 'pointer-events-none opacity-50' : ''
    ].join(" ");
});
</script>

<template>
    <RouterLink :to="to" :class="classes" :aria-disabled="disabled">
        <slot />
    </RouterLink>
</template>
