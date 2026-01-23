<script setup>
import { Button } from '../../packages/ui/src/components/button'
</script>

<template>
  <div class="p-10 space-y-6">
    <h1 class="text-2xl font-bold">
      vue-template-kit playground
    </h1>

    <div class="space-x-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>

    <div class="space-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>

    <Button loading>
      Saving...
    </Button>
  </div>
</template>
