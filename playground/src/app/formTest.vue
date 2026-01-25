<script setup>
import { ref } from "vue";
import { InputText, TextArea, InputSelect, FileUpload, RadioInput, Checkbox, Toggle, Button } from "vue-kit-ui";

const formData = ref({
  fullName: "",
  email: "",
  bio: "",
  department: "",
  experience: "",
  remote: false,
  resume: [],
  agree: false
});

const departmentOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'product', label: 'Product Management' },
    { value: 'design', label: 'Product Design' },
    { value: 'marketing', label: 'Marketing' },
];

const experienceOptions = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (5+ years)' },
];

const handleSubmit = () => {
    console.log("=== Form Data Submitted ===");
    console.log(JSON.parse(JSON.stringify(formData.value)));
    alert("Data berhasil dikirim! Cek console untuk detailnya.");
};
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                <div class="bg-indigo-600 px-6 py-4">
                    <h2 class="text-xl font-bold text-white">Formulir Lamaran Kerja</h2>
                    <p class="text-indigo-100 text-sm mt-1">Silakan lengkapi data diri Anda di bawah ini.</p>
                </div>

                <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
                    <!-- Personal Information -->
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div>
                            <InputText
                                label="Nama Lengkap"
                                name="fullName"
                                placeholder="Masukkan nama lengkap"
                                v-model="formData.fullName"
                                required
                            />
                        </div>
                        <div>
                            <InputText
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="contoh@email.com"
                                v-model="formData.email"
                                required
                            />
                        </div>
                    </div>

                    <!-- Professional Details -->
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div>
                            <InputSelect
                                label="Departemen"
                                v-model="formData.department"
                                :options="departmentOptions"
                                placeholder="Pilih Departemen"
                                filter
                            />
                        </div>
                        <div class="pt-2">
                            <Toggle
                                label="Bersedia Remote?"
                                descriptionTrue="Ya"
                                descriptionFalse="Tidak"
                                v-model="formData.remote"
                            />
                        </div>
                    </div>

                    <div>
                        <RadioInput
                            label="Tingkat Pengalaman"
                            name="experience"
                            v-model="formData.experience"
                            :options="experienceOptions"
                        />
                    </div>

                    <div>
                        <TextArea
                            label="Tentang Diri Anda (Bio)"
                            name="bio"
                            v-model="formData.bio"
                            rows="4"
                            placeholder="Ceritakan sedikit tentang pengalaman dan keahlian Anda..."
                        />
                    </div>

                    <div>
                        <FileUpload
                            label="Upload CV / Resume"
                            name="resume"
                            v-model="formData.resume"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>

                    <div class="border-t border-gray-200 pt-6">
                        <Checkbox
                            name="terms"
                            label="Saya menyatakan bahwa data yang diisi adalah benar"
                            v-model="formData.agree"
                            required
                        />
                    </div>

                    <div class="flex justify-end pt-4">
                        <Button type="submit" size="lg">
                            Kirim Lamaran
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
