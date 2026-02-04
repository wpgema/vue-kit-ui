<template>
    <div class="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="flex justify-between items-start mb-4">
            <div class="p-2.5 rounded-xl" :class="colorConfig[color]">
                <slot name="icon">
                    <div v-if="icon === 'default'" class="w-6 h-6 rounded-full bg-current"></div>
                    <svg v-else-if="icon === 'trending-up'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <svg v-else-if="icon === 'info'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </slot>
            </div>
            <span v-if="percentage" class="text-xs font-bold flex items-center gap-0.5" :class="colorConfig[color]">
                {{ percentage }}
            </span>
        </div>
        <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">{{ title }}</p>
        <p class="text-xl md:text-2xl font-bold mt-1">{{ value }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: true
    },
    percentage: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'trending-up', 'info'].includes(value)
    },
    color: {
        type: String,
        default: 'success',
        validator: (value) => ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
    }
});

const colorConfig = {
    primary: 'bg-indigo-500/10 text-indigo-500',
    success: 'bg-emerald-500/10 text-emerald-500',
    warning: 'bg-amber-500/10 text-amber-500',
    danger: 'bg-rose-500/10 text-rose-500',
    info: 'bg-blue-500/10 text-blue-500',
};
</script>