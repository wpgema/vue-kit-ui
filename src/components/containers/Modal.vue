<template>
    <teleport to="body">
        <div v-if="shouldRender"
            :class="['fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out', isVisible ? 'opacity-100' : 'opacity-0']">
            <div :class="['absolute inset-0 backdrop-blur-sm transition-all duration-300 ease-in-out', isVisible ? 'bg-black/20' : 'bg-black/0']"
                @click="onClose" />
            <div
                :class="['relative w-full mx-4 rounded-lg bg-white shadow-xl z-10 transition-all duration-300 ease-in-out transform', sizeClass, isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0']">
                <button v-if="showCloseButton"
                    class="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-20 cursor-pointer"
                    @click="onClose">
                    <X :size="20" />
                </button>
                <div class="p-6">
                    <slot />
                </div>
            </div>
        </div>
    </teleport>
</template>
<script setup>
import { ref, watch, computed } from 'vue';
import { X } from 'lucide-vue-next';
const props = defineProps({
    isOpen: { type: Boolean, default: false },
    onClose: { type: Function, required: true },
    size: { type: String, default: 'md' },
    showCloseButton: { type: Boolean, default: true },
});
const isVisible = ref(false);
const shouldRender = ref(false);
watch(() => props.isOpen, (val) => {
    if (val) {
        shouldRender.value = true;
        setTimeout(() => (isVisible.value = true), 10);
    } else {
        isVisible.value = false;
        setTimeout(() => (shouldRender.value = false), 300);
    }
}, { immediate: true });
const sizeClass = computed(() => {
    const map = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
    };
    return map[props.size] || map.md;
});
const onClose = () => {
    if (props.onClose) props.onClose();
};
</script>
