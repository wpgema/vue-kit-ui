<script setup>
import { Card } from '@gemamaulana/vue-kit-ui';
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
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-3">Card Examples</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <Card title="Total Revenue" value="$45,200" percentage="+5.2%" color="success" icon="trending-up" />
                    <Card title="Active Users" value="12,340" percentage="+12.5%" color="primary" icon="default" />
                    <Card title="Bounce Rate" value="42.5%" percentage="-2.4%" color="danger" icon="info" />
                </div>
                <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                    <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                    <div class="p-3 rounded text-sm font-mono text-slate-700">
                        <p class="mb-2">import { Badge } from "../../../packages/ui/src/components/card";</p>
                        <p class="mt-2">&lt;Card title="Total Revenue" value="$45,200" percentage="+5.2%" color="success" icon="trending-up" /&gt;</p>
                        <p class="mt-2">&lt;Card title="Active Users" value="12,340" percentage="+12.5%" color="primary" /&gt; &lt;!-- default icon --&gt;</p>
                        <p class="mt-2">&lt;Card title="Bounce Rate" value="42.5%" percentage="-2.4%" color="danger" icon="info" /&gt;</p>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
