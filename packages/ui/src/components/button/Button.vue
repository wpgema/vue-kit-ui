<script setup>
import { computed } from "vue";
import * as Icons from "lucide-vue-next";
import { useRouter } from "vue-router";
const props = defineProps({
    to: { type: String, default: "/" },
    onClick: { type: Function, default: null },
    background: { type: String, default: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500" },
    color: { type: String, default: "text-white" },
    classOther: { type: String, default: "" },
    icon: { type: String, default: "" },
    size: { type: Number, default: 16 },
    stroke: { type: Number, default: 2 },
    content: { type: String, default: "" },
});
const router = useRouter();
const IconComponent = computed(() => {
    if (!props.icon) return null;
    return Icons[props.icon];
});
const baseClass = computed(() => {
    return `
        inline-flex items-center px-4 py-2 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        font-semibold text-sm 
        ${props.background} ${props.color} ${props.classOther}
    `;
});
function handleClick() {
    if (props.onClick) {
        props.onClick();
    } else if (props.to) {
        router.push(props.to);
    }
}
</script>
<template>
    <button :class="baseClass">
        <component v-if="IconComponent" :is="IconComponent" :size="props.size" :stroke-width="props.stroke" />
        {{ props.content }}
    </button>
</template>
