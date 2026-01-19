<template>
    <div :class="[horizontal ? 'flex items-center gap-3' : 'flex flex-col', noMargin ? '' : 'mb-4']">
        <label v-if="label" :for="name" class="text-sm font-semibold mb-3 text-gray-800"
            :class="required ? `after:content-['*'] after:ml-0.5 after:text-red-500` : ''">
            {{ label }}
        </label>
        <div :class="horizontal ? 'flex-1 relative' : 'w-full relative'">
            <div class="flex items-center rounded-lg border px-3 py-2 transition" :class="error
                ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-500'
                : 'border-gray-300 focus-within:border-gray-200 focus-within:ring-2 focus-within:ring-gray-200'
                ">
                <input ref="inputRef" type="text" :id="name" :name="name" :placeholder="placeholder"
                    class="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none focus:ring-0"
                    readonly @keyup.enter="onEnter" />
                <div v-if="!error" class="flex items-center gap-1">
                    <button v-if="value" type="button" @click="handleClear"
                        class="p-1 rounded hover:bg-gray-100 transition-colors duration-200" title="Hapus tanggal">
                        <X class="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                    <Calendar v-else class="h-5 w-5 text-gray-400" />
                </div>
            </div>
            <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
        </div>
    </div>
</template>
<script>
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeId from "air-datepicker/locale/id";
import { Calendar, X } from "lucide-vue-next";
export default {
    name: "DatePicker",
    components: { Calendar, X },
    props: {
        label: String,
        placeholder: String,
        error: { type: [String, Boolean], default: false },
        required: Boolean,
        horizontal: Boolean,
        noMargin: Boolean,
        value: [String, Date],
        name: String,
        onChange: Function,
        onClearError: Function,
    },
    data() {
        return {
            picker: null,
        };
    },
    mounted() {
        const el = this.$refs.inputRef;
        this.picker = new AirDatepicker(el, {
            dateFormat: "dd-MM-yyyy",
            locale: localeId,
            onSelect: ({ date }) => {
                if (date) {
                    const adjusted = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
                    const iso = adjusted.toISOString().split("T")[0];
                    this.onChange?.(iso);
                    el.value = this.formatIndo(adjusted);
                } else {
                    this.onChange?.(null);
                    el.value = "";
                }
                this.onClearError?.(this.name);
                this.picker.hide();
            },
        });
        if (this.value) this.updateInitialValue();
    },
    watch: {
        value() {
            this.updateInitialValue();
        },
    },
    beforeUnmount() {
        this.picker?.destroy();
    },
    methods: {
        formatIndo(date) {
            return new Intl.DateTimeFormat("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }).format(date);
        },
        updateInitialValue() {
            if (!this.value || !this.picker) {
                this.picker.clear();
                this.$refs.inputRef.value = "";
                return;
            }
            const d = new Date(this.value);
            const adjusted = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
            this.picker.selectDate(adjusted);
            this.$refs.inputRef.value = this.formatIndo(adjusted);
        },
        handleClear() {
            this.picker.clear();
            this.$refs.inputRef.value = "";
            this.onChange?.(null);
            this.onClearError?.(this.name);
        },
        onEnter(e) {
            const raw = e.target.value.trim();
            const parts = raw.split("-");
            if (parts.length === 3) {
                const [dd, mm, yyyy] = parts;
                const parsed = new Date(`${yyyy}-${mm}-${dd}`);
                if (!isNaN(parsed.getTime())) {
                    const adjusted = new Date(parsed.getTime() - parsed.getTimezoneOffset() * 60000);
                    const iso = adjusted.toISOString().split("T")[0];
                    this.onChange?.(iso);
                    this.$refs.inputRef.value = this.formatIndo(adjusted);
                    this.onClearError?.(this.name);
                }
            }
        },
    },
};
</script>
<style scoped></style>
