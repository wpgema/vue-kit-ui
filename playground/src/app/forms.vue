<script setup>
import { ref } from "vue";
import { InputText, TextArea, InputSelect, FileUpload, RadioInput, Checkbox, Toggle } from "vue-kit-ui";
import { Button } from "vue-kit-ui";

const username = ref("");
const password = ref("");
const description = ref("");
const status = ref("");
const files = ref("");
const gender = ref("");
const toggleNotifications = ref(false);
const toggleHorizontal = ref(false);
const isLoading = ref(false);
const agree = ref(false);
const errorMsg = "You must agree to the terms";

const startLoading = () => {
    isLoading.value = true;
    alert("Button clicked! Loading state activated for 2 seconds.");
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
};

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
            <h1 class="text-3xl font-semibold">Form Component Playground</h1>

            <h2 class="text-xl font-medium">Button Examples</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div class="flex gap-2 flex-wrap items-center mb-4">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="yellow">Yellow</Button>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center mb-4">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center">
                        <Button :loading="isLoading" @click="startLoading">Click to Load</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </div>
                <!-- Code Usage -->
                <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto">
                    <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                    <div class="p-3 rounded text-sm font-mono text-slate-700">
                        <p class="mb-2">import { Button } from "../../packages/ui/src/components/button";</p>
                        <p class="mb-1">&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button variant="yellow"&gt;Yellow&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button size="sm"&gt;Small&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button size="md"&gt;Medium&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button size="lg"&gt;Large&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button :loading="isLoading" @click="startLoading"&gt;Loading&lt;/Button&gt;</p>
                        <p class="mb-1">&lt;Button disabled&gt;Disabled&lt;/Button&gt;</p>
                    </div>
                </div>
            </div>

            <h2 class="text-xl font-medium">Input Examples</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div class="flex gap-2 flex-wrap">
                        <InputText
                            label="Username"
                            name="username"
                            placeholder="Enter Username"
                            v-model="username"
                            :error="false"
                            required
                        />
                        <InputText
                            label="Password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            v-model="password"
                            :error="false"
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class=" p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { InputText } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;InputText 
                                    label="Username"
                                    name="username"
                                    placeholder="Enter Username"
                                    v-model="username"
                                    :error="false"
                                    required
                                /&gt;
                            </p>
                            <p class="mb-1">
                                &lt;InputText 
                                    label="Password"
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    v-model="password"
                                    :error="false"
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2 flex-wrap">
                        <TextArea
                            label="Description"
                            name="description"
                            v-model="description"
                            rows="5"
                            placeholder="Enter description..."
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { TextArea } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;TextArea 
                                    label="Description"
                                    name="description"
                                    v-model="description"
                                    rows="5"
                                    placeholder="Enter description..."
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div class="flex gap-2 flex-wrap">
                        <InputSelect
                            label="Filter Status"
                            filter
                            v-model="status"
                            :options="[
                                { value: 'active', label: 'Active' },
                                { value: 'inactive', label: 'Inactive' },
                            ]"
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { InputSelect } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;InputSelect 
                                    label="Filter Status"
                                    filter
                                    v-model="status"
                                    :options="[
                                        { value: 'active', label: 'Active' },
                                        { value: 'inactive', label: 'Inactive' },
                                    ]"
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2 flex-wrap">
                        <FileUpload
                            label="Upload File"
                            name="file"
                            v-model="files"
                            multiple
                            accept=".pdf,.docx,.jpg,.png"
                            required
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { FileUpload } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;FileUpload 
                                    label="Upload File"
                                    name="file"
                                    v-model="files"
                                    multiple
                                    accept=".pdf,.docx,.jpg,.png"
                                    required
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div class="flex gap-2 flex-wrap">
                        <RadioInput
                            name="gender"
                            label="Gender"
                            :options="[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' }
                            ]"
                            v-model="gender"
                            required
                        />
                        <Checkbox
                            name="terms"
                            label="I agree to the terms and conditions"
                            v-model="agree"
                            :error="!agree && errorMsg"
                            required
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-1">import { RadioInput } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-2">import { Checkbox } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;RadioInput 
                                    name="gender"
                                    label="Gender"
                                    :options="[
                                        { value: 'male', label: 'Male'},
                                        { value: 'female', label: 'Female'}
                                    ]"
                                    v-model="gender"
                                    required
                                /&gt;
                            </p>
                            <p class="mb-1">
                                &lt;Checkbox 
                                    name="terms"
                                    label="I agree to the terms and conditions"
                                    v-model="agree"
                                    :error="agree ? false : errorMsg"
                                    required
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-6 flex-wrap justify-between">
                        <Toggle
                            label="Notifications"
                            descriptionTrue="On"
                            descriptionFalse="Off"
                            v-model="toggleNotifications"
                        />
                        <Toggle
                            label="Horizontal Mode"
                            horizontal
                            v-model="toggleHorizontal"
                        />
                    </div>
                    <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto mt-7">
                        <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                        <div class="p-3 rounded text-sm font-mono text-slate-700">
                            <p class="mb-2">import { Toggle } from "../../packages/ui/src/components/input";</p>
                            <p class="mb-1">
                                &lt;Toggle 
                                    label="Notifications"
                                    descriptionTrue="On"
                                    descriptionFalse="Off"
                                    v-model="toggleNotifications"
                                /&gt;
                            </p>
                            <p class="mb-1">
                                &lt;Toggle 
                                    label="Horizontal Mode"
                                    horizontal
                                    v-model="toggleHorizontal"
                                /&gt;
                            </p>
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
