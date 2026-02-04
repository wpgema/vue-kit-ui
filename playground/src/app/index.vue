<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import { Button } from "@gemamaulana/vue-kit-ui";
</script>

<template>
    <div class="min-h-screen flex flex-col text-gray-900">
        <Header />

        <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <!-- Hero Section -->
            <div class="text-center space-y-6 py-10">
                <h1 class="text-4xl sm:text-5xl font-bold text-indigo-600 tracking-tight">vue-kit-ui</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A reusable <strong>Vue 3 + Tailwind CSS UI component library</strong> designed to speed up development of modern dashboards and MVPs.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <router-link to="/docs/elements">
                        <Button size="lg">Get Started</Button>
                    </router-link>
                    <a href="https://github.com/wpgema/vue-kit-ui" target="_blank">
                        <Button variant="outline" size="lg">View on GitHub</Button>
                    </a>
                </div>
            </div>

            <!-- Goal Section -->
            <section>
                <h2 class="text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2">
                    <span>🎯</span> Project Goals
                </h2>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul class="grid sm:grid-cols-2 gap-4 text-gray-700">
                        <li class="flex items-start gap-2">
                            <span class="text-green-500 font-bold">✓</span> Reduce repetitive UI work
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-green-500 font-bold">✓</span> Provide consistent design patterns
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-green-500 font-bold">✓</span> Separate UI logic from business logic
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-green-500 font-bold">✓</span> Serve as a solid base for dashboards
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Requirements & Installation -->
            <div class="grid md:grid-cols-2 gap-8">
                <section>
                    <h2 class="text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <span>📝</span> Requirements
                    </h2>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                        <ul class="list-disc list-inside space-y-3 text-gray-700">
                            <li><strong class="text-indigo-600">Vue 3</strong> (Composition API)</li>
                            <li><strong class="text-sky-500">Tailwind CSS</strong> (Must be configured in your project)</li>
                        </ul>
                        <div class="mt-4 p-3 bg-amber-50 rounded text-sm text-amber-800 border border-amber-200">
                            ⚠️ Tailwind CSS is not bundled with this library. You are responsible for configuring it in your application.
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2">
                        <span>📦</span> Installation
                    </h2>
                    <div class="bg-gray-900 p-6 rounded-lg shadow-sm h-full flex flex-col justify-center">
                        <div class="flex justify-between items-center mb-2 text-gray-400 text-xs uppercase tracking-wider">
                            <span>Terminal</span>
                        </div>
                        <div class="font-mono text-emerald-400 text-sm overflow-x-auto">
                            npm install @gemamaulana/vue-kit-ui
                        </div>
                    </div>
                </section>
            </div>

            <!-- Contributing -->
            <section class="pt-16">
                <h2 class="text-2xl font-bold mb-4 border-b pb-2 flex items-center gap-2">
                    <span>🤝</span> How to Contribute
                </h2>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-gray-700 mb-6">
                        We welcome contributions! Whether it's fixing bugs, improving documentation, or creating new components.
                    </p>
                    <div class="grid gap-6 md:grid-cols-3">
                        <div class="step">
                            <div class="text-indigo-600 font-bold text-lg mb-1">1. Fork & Clone</div>
                            <p class="text-sm text-gray-600">Fork the repo on GitHub and clone it to your local machine.</p>
                        </div>
                        <div class="step">
                            <div class="text-indigo-600 font-bold text-lg mb-1">2. Branch & Code</div>
                            <p class="text-sm text-gray-600">Create a feature branch, write your code, and commit changes.</p>
                        </div>
                        <div class="step">
                            <div class="text-indigo-600 font-bold text-lg mb-1">3. Pull Request</div>
                            <p class="text-sm text-gray-600">Push to your fork and submit a Pull Request for review.</p>
                        </div>
                    </div>
                    <div class="mt-6 text-center">
                        <a href="https://github.com/wpgema/vue-kit-ui" target="_blank" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                            Visit Repository to Contribute &rarr;
                        </a>
                    </div>
                </div>
            </section>

            <!-- Initiator -->
            <section class="max-w-2xl mx-auto pt-8">
                <div class="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-8 border border-indigo-100 text-center shadow-sm">
                    <h2 class="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2">Initiated By</h2>
                    <div class="text-gray-900">
                        <p class="font-bold text-2xl mb-1">M. Gema Maulana</p>
                        <p class="text-gray-500 font-medium">Web Developer</p>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>
