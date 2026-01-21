<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) =>
      ['primary', 'secondary', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) =>
      ['sm', 'md', 'lg'].includes(v),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const base =
  'inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none'

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const classes = computed(() => [
  base,
  variants[props.variant],
  sizes[props.size],
  props.disabled || props.loading
    ? 'opacity-50 cursor-not-allowed'
    : '',
])
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
  >
    <span v-if="loading">Loading...</span>
    <slot v-else />
  </button>
</template>
