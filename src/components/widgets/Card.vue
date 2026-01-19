<template>
    <div
        class="relative overflow-hidden rounded-2xl shadow-md p-4 md:p-8"
        :class="background"
    >
        <div class="flex justify-center items-center flex-col">
            <p class="text-base text-white font-semibold">{{ title }}</p>
            <h2 class="mt-2 text-3xl font-bold text-white">{{ value }}</h2>
        </div>

        <component
            :is="icon"
            class="absolute right-4 bottom-4 w-20 h-20 text-slate-600 opacity-20 pointer-events-none"
        />
    </div>
</template>

<script>
export default {
    name: "Card",

    props: {
        title: { type: String, required: true },
        value: { type: [String, Number], required: true },
        background: { type: String, required: true },
        icon: { type: [Object, Function], required: true },
    },
};
</script>
