<script setup>
import { Badge, LoadingDots, LoadingSpinner } from '@gemamaulana/vue-kit-ui';
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

</script>

<template>
    <div class="min-h-screen flex flex-col text-gray-900">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h1 class="text-3xl font-semibold">Components Playground</h1>

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
        <Footer />
    </div>
</template>
