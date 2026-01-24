<script setup>
import { ref } from "vue";
import { InputText, TextArea, InputSelect, FileUpload, RadioInput, Checkbox, Toggle } from "../../packages/ui/src/components/input";
import { ButtonAction, ButtonLink } from "../../packages/ui/src/components/button";

const username = ref("");
const password = ref("");
const description = ref("");
const status = ref("");
const files = ref("");
const gender = ref("");
const toggleNotifications = ref(false);
const toggleHorizontal = ref(false);
const isLoading = ref(false);

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
                    <p>Current Version: 1.0.0</p>
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
                        <ButtonAction>Primary</ButtonAction>
                        <ButtonAction variant="secondary">Secondary</ButtonAction>
                        <ButtonAction variant="danger">Danger</ButtonAction>
                        <ButtonAction variant="outline">Outline</ButtonAction>
                        <ButtonAction variant="yellow">Yellow</ButtonAction>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center mb-4">
                        <ButtonAction size="sm">Small</ButtonAction>
                        <ButtonAction size="md">Medium</ButtonAction>
                        <ButtonAction size="lg">Large</ButtonAction>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center">
                        <ButtonAction :loading="isLoading" @click="startLoading">Click to Load</ButtonAction>
                        <ButtonAction disabled>Disabled</ButtonAction>
                    </div>
                </div>
                <!-- Code Usage -->
                <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto">
                    <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                    <div class="p-3 rounded text-sm font-mono text-slate-700">
                        <p class="mb-2">import { ButtonAction } from "../../packages/ui/src/components/button";</p>
                        <p class="mb-1">&lt;ButtonAction variant="primary"&gt;Primary&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction variant="secondary"&gt;Secondary&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction variant="outline"&gt;Outline&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction variant="yellow"&gt;Yellow&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction size="sm"&gt;Small&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction size="md"&gt;Medium&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction size="lg"&gt;Large&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction :loading="isLoading" @click="startLoading"&gt;Loading&lt;/ButtonAction&gt;</p>
                        <p class="mb-1">&lt;ButtonAction disabled&gt;Disabled&lt;/ButtonAction&gt;</p>
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
                            v-model:value="username"
                            :error="false"
                            required
                        />
                        <InputText
                            label="Password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            v-model:value="password"
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
                                    v-model:value="username"
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
                                    v-model:value="password"
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
                            v-model:value="status"
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
                                    v-model:value="status"
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
                            v-model:value="gender"
                            required
                        />
                        <Checkbox
                            name="terms"
                            label="I agree to the terms and conditions"
                            v-model:checked="agree"
                            :error="agree ? false : errorMsg"
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
                                    v-model:value="gender"
                                    required
                                /&gt;
                            </p>
                            <p class="mb-1">
                                &lt;Checkbox 
                                    name="terms"
                                    label="I agree to the terms and conditions"
                                    v-model:checked="agree"
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
                            v-model:value="toggleNotifications"
                        />
                        <Toggle
                            label="Horizontal Mode"
                            horizontal
                            v-model:value="toggleHorizontal"
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
                                    v-model:value="toggleNotifications"
                                /&gt;
                            </p>
                            <p class="mb-1">
                                &lt;Toggle 
                                    label="Horizontal Mode"
                                    horizontal
                                    v-model:value="toggleHorizontal"
                                /&gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 class="text-xl font-medium">Button Link Examples</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div>
                    <div class="flex gap-2 flex-wrap items-center mb-4">
                        <ButtonLink to="/">Primary</ButtonLink>
                        <ButtonLink to="/about" variant="secondary">Secondary</ButtonLink>
                        <ButtonLink to="/contact" variant="danger">Danger</ButtonLink>
                        <ButtonLink to="/" variant="outline">Outline</ButtonLink>
                        <ButtonLink to="/" variant="yellow">Yellow</ButtonLink>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center mb-4">
                        <ButtonLink to="/" size="sm">Small</ButtonLink>
                        <ButtonLink to="/" size="md">Medium</ButtonLink>
                        <ButtonLink to="/" size="lg">Large</ButtonLink>
                    </div>
                    <div class="flex gap-2 flex-wrap items-center">
                        <ButtonLink to="/" disabled>Disabled</ButtonLink>
                    </div>
                </div>
                <!-- Code Usage -->
                <div class="p-4 rounded-md bg-slate-50 border border-gray-200 overflow-x-auto">
                    <p class="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Usage</p>
                    <div class="p-3 rounded text-sm font-mono text-slate-700">
                        <p class="mb-2">import { ButtonLink } from "../../packages/ui/src/components/button";</p>
                        <p class="mb-1">&lt;ButtonLink to="/" variant="primary"&gt;Primary&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/about" variant="secondary"&gt;Secondary&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/contact" variant="danger"&gt;Danger&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" variant="outline"&gt;Outline&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" variant="yellow"&gt;Yellow&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" size="sm"&gt;Small&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" size="md"&gt;Medium&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" size="lg"&gt;Large&lt;/ButtonLink&gt;</p>
                        <p class="mb-1">&lt;ButtonLink to="/" disabled&gt;Disabled&lt;/ButtonLink&gt;</p>
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
