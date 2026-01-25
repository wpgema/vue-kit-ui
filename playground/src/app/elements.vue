<script setup>
import { Badge, LoadingDots, LoadingSpinner } from '../../../packages/ui/src/components/elements';

</script>

<template>
    <div class="min-h-screen flex flex-col text-gray-900">
        <!-- Header -->
        <header class="bg-indigo-600 shadow-sm sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center text-white">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">Vue Kit UI</h1>
                        <h2 class="text-sm font-semibold">Developer Page</h2>
                    </div>
                    <p>Current Version: 0.1.0</p>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h1 class="text-3xl font-semibold">Elements Component Playground</h1>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <h2 class="text-xl font-semibold mb-3">Badge Examples</h2>
                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                        <Badge label="active" color="primary" size="sm" />
                        <Badge label="Primary" color="primary" size="md" />
                        <Badge label="Success" color="success" size="md" />
                        <Badge label="Warning" color="warning" size="md" />
                        <Badge label="Danger" color="danger" size="md" />
                        <Badge label="Gray" color="gray" size="md" />
                        <Badge label="Success" color="success" size="lg" />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { Badge } from "../../packages/ui/src/components/elements";</p>
                            <p class="mb-1">&lt;Badge label="active" color="primary" size="sm" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Primary" color="primary" size="md" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Success" color="success" size="md" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Warning" color="warning" size="md" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Danger" color="danger" size="md" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Gray" color="gray" size="md" /&gt;</p>
                            <p class="mb-1">&lt;Badge label="Success" color="success" size="lg" /&gt;</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold mb-3">Loading Examples</h2>
                    <div class="flex items-center justify-evenly gap-2">
                        <LoadingDots />
                        <LoadingSpinner />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p>import { LoadingDots, LoadingSpinner } from "../../packages/ui/src/components/elements";</p>
                            <p class="mt-2">&lt;LoadingDots /&gt;</p>
                            <p class="mt-1">&lt;LoadingSpinner /&gt;</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-indigo-600 border-t border-indigo-700 mt-auto">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-white">
                    &copy; 2024 UI Vue Kit. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>
