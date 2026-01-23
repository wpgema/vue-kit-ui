<script setup>
import { Button } from "../../packages/ui/src/components/button";
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <!-- Header -->
        <header class="bg-white shadow-sm sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <span class="text-xl font-bold text-gray-800">UI Vue Kit</span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <h1 class="text-3xl font-semibold">Component Playground</h1>
            <h2 class="text-xl font-medium">Button Examples</h2>
            <div class="flex gap-2 flex-wrap">
                <Button 
                    icon="Plus"
                    to="/add"
                    content="Tambah"
                    background="bg-blue-500 hover:bg-blue-900 focus:ring-blue-500"
                />
                <Button
                    icon="Eye"
                    to="/detail"
                    background="bg-indigo-500 hover:bg-indigo-700 focus:ring-blue-500"
                />
                <Button
                    icon="Pencil"
                    background="bg-yellow-500 hover:bg-yellow-700 focus:ring-blue-500"
                />
                <Button
                    icon="Trash2"
                    :onClick="() => alert('Clicked!')" 
                    background="bg-red-500 hover:bg-red-700 focus:ring-blue-500"
                />
            </div>
            <div class="p-4 rounded-md bg-white border border-gray-200 overflow-x-auto">
                <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                <div class="bg-slate-50 p-3 rounded text-sm font-mono text-slate-700">
                    <p class="mb-2">import { Button } from "../../packages/ui/src/components/button";</p>
                    <p class="mb-1">
                        &lt;Button 
                            icon="Plus"
                            to="/add"
                            content="Tambah"
                            background="bg-blue-500 hover:bg-blue-900 focus:ring-blue-500"
                        /&gt;
                    </p>
                    <p class="mb-1">
                        &lt;Button 
                            icon="Eye"
                            to="/detail"
                            background="bg-indigo-500 hover:bg-indigo-700 focus:ring-blue-500"
                        /&gt;
                    </p>
                    <p class="mb-1">
                        &lt;Button 
                            icon="Pencil"
                            background="bg-yellow-500 hover:bg-yellow-700 focus:ring-blue-500"
                        /&gt;
                    </p>
                    <p class="mb-1">
                        &lt;Button 
                            icon="Trash2"
                            :onClick="() => alert('Clicked!')" 
                            background="bg-red-500 hover:bg-red-700 focus:ring-blue-500"
                        /&gt;
                    </p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 mt-auto">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-500">
                    &copy; 2024 UI Vue Kit. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>
