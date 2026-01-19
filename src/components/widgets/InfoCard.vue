<template>
    <div class="relative rounded-md border border-gray-200 bg-white p-4 overflow-hidden">
        <div
            class="absolute -top-4 -right-4 h-20 w-20 rounded-full flex items-center justify-center opacity-90 z-10"
            :class="iconBg"
        >
            <div class="text-white text-2xl">
                <component :is="icon" />
            </div>
        </div>

        <h2 v-if="title" class="text-base font-semibold text-gray-800">
            {{ title }}
        </h2>

        <div class="mt-1 text-sm text-gray-500">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCard",

    props: {
        title: {
            type: String,
            default: "",
        },
        icon: {
            type: [Object, Function],
            required: true,
        },
        iconBg: {
            type: String,
            default: "bg-amber-100 text-amber-500",
        },
    },
};
</script>
