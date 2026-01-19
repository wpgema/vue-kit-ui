<script setup>
import { ref, watch } from "vue";
const props = defineProps({
    modelValue: { type: Array, default: () => [] },
    label: String,
    accept: { type: String, default: "*" },
    multiple: { type: Boolean, default: false },
    name: String,
    required: Boolean
});
const emit = defineEmits(["update:modelValue"]);
const inputRef = ref(null);
const internalFiles = ref([...props.modelValue]);
watch(() => props.modelValue, (val) => {
    internalFiles.value = [...val];
});
function handleClick() {
    inputRef.value?.click();
}
function handleChange(event) {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const newFiles = props.multiple ? [...internalFiles.value, ...files] : files;
    internalFiles.value = newFiles;
    emit("update:modelValue", newFiles);
}
function removeFile(index) {
    internalFiles.value.splice(index, 1);
    emit("update:modelValue", [...internalFiles.value]);
}
</script>
<template>
    <div class="w-full">
        <label v-if="label" :for="name" class="block mb-3 text-sm font-semibold text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <input type="hidden" :name="name" :value="internalFiles.map(f => f.name).join(',')" />
        <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition"
            @click="handleClick">
            <p class="text-gray-500 text-sm">
                Klik atau drag file ke sini <span v-if="multiple">(bisa lebih dari 1)</span>
            </p>
        </div>
        <input type="file" ref="inputRef" class="hidden" :accept="accept" :multiple="multiple" @change="handleChange" />
        <ul v-if="internalFiles.length > 0" class="mt-3 space-y-2">
            <li v-for="(file, idx) in internalFiles" :key="idx"
                class="flex justify-between items-center text-sm border p-2 rounded border-gray-300">
                <span class="truncate max-w-xs">{{ file.name }}</span>
                <button type="button" class="text-red-500 hover:text-red-700 text-xs cursor-pointer"
                    @click="removeFile(idx)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-6 0V4a1 1 0 011-1h4a1 1 0 011 1v3" />
                    </svg>
                </button>
            </li>
        </ul>
    </div>
</template>
