<template>
    <footer class="bg-gray-50 my-8">
        <div class="container mx-auto text-end px-4">
            <p class="text-slate-400 font-medium text-sm">&copy; {{ year }} Aldebaran E-Kasir. All rights reserved.</p>
        </div>
    </footer>
</template>
<script setup>
import { computed } from 'vue';
const year = new Date().getFullYear();
</script>
