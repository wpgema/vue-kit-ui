<template>
    <span class="inline-flex items-center rounded-full font-medium" :class="[colorClasses[color], sizeClasses[size]]">
        <component v-if="icon" :is="icon" class="mr-1 h-4 w-4" />
        {{ label }}
    </span>
</template>
<script>
export default {
    name: "Badge",
    props: {
        label: { type: String, required: true },
        color: {
            type: String,
            default: "gray",
            validator: (v) =>
                ["primary", "success", "warning", "danger", "gray"].includes(v),
        },
        size: {
            type: String,
            default: "md",
            validator: (v) => ["sm", "md", "lg"].includes(v),
        },
        icon: {
            type: [Object, Function],
            default: null,
        },
    },
    computed: {
        colorClasses() {
            return {
                primary: "bg-indigo-100 text-indigo-700",
                success: "bg-green-100 text-green-700",
                warning: "bg-yellow-100 text-yellow-700",
                danger: "bg-red-100 text-red-700",
                gray: "bg-gray-100 text-gray-700",
            };
        },
        sizeClasses() {
            return {
                sm: "text-xs px-2 py-0.5",
                md: "text-sm px-3 py-1",
                lg: "text-base px-4 py-1.5",
            };
        },
    },
};
</script>
