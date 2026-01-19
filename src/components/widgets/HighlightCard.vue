<template>
    <div class="relative rounded-md border border-gray-200 bg-white p-4">
        <div
            class="absolute -top-2 right-2 p-2 rounded-bl-lg rounded-tr-md"
            :class="iconBg"
        >
        
        <component
            v-if="icon"
            :is="icon"
            class="text-white"
        />
        
        <component
            v-else
            :is="IconComponent"
            :size="16"
            class="text-white"
        />
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
import * as Icons from "lucide-vue-next";

export default {
    name: "HighlightCard",

    props: {
        title: String,
        icon: null, 
        iconName: {
            type: String,
            default: "Star",
        },
        iconBg: {
            type: String,
            default: "bg-yellow-500",
        },
    },

    computed: {
        IconComponent() {
            return Icons[this.iconName] || Icons.Star;
        },
    },
};
</script>

<style scoped></style>
