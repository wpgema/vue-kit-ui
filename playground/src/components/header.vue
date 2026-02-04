<script setup>
</script>

<template>
    <header class="bg-indigo-600 shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center text-white">
                <div class="flex flex-col">
                    <router-link to="/" class="text-2xl font-bold hover:text-indigo-100">Vue Kit UI</router-link>
                    <h2 class="text-sm font-semibold">Developer Page</h2>
                </div>
                
                <nav class="hidden md:flex space-x-8">
                    <router-link to="/" class="hover:text-indigo-200 transition-colors" active-class="text-indigo-200 font-semibold">Home</router-link>
                    <router-link to="/docs/elements" class="hover:text-indigo-200 transition-colors" active-class="text-indigo-200 font-semibold">Elements</router-link>
                    <router-link to="/docs/forms" class="hover:text-indigo-200 transition-colors" active-class="text-indigo-200 font-semibold">Forms</router-link>
                    <router-link to="/forms/test" class="hover:text-indigo-200 transition-colors" active-class="text-indigo-200 font-semibold">Form Test</router-link>
                </nav>

                <p>Current Version: 0.1.1</p>
            </div>
        </div>
    </header>
</template>
