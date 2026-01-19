<script setup>
import { ref } from "vue";
import Input from "./components/elements/input.vue";
import SearchInput from "./components/elements/SearchInput.vue";
import Radio from "./components/elements/Radio.vue";
import Select from "./components/elements/Select.vue";
import Checkbox from "./components/elements/Checkbox.vue";
import Toggle from "./components/elements/Toggle.vue";
import FileUpload from "./components/elements/FileUpload.vue";
import TextArea from "./components/elements/TextArea.vue";
import Tabs from "./components/elements/Tabs.vue";
import Badge from "./components/elements/Badge.vue";
import Card from "./components/widgets/Card.vue";
import DatePicker from "./components/elements/DatePicker.vue";
import Button from "./components/elements/Button.vue";
import HighlightCard from "./components/widgets/HighlightCard.vue";
import InfoCard from "./components/widgets/InfoCard.vue";
import SummaryPage from "./components/widgets/SummaryPage.vue";
import Table from "./components/widgets/Table.vue";
import { Lock, Home, User, Check, Users, FileText, AlertCircle, AlertTriangle, Settings } from "lucide-vue-next";
import { Search } from "lucide-vue-next";
import Header from "./components/containers/Header.vue";
import Footer from "./components/containers/Footer.vue";

const username = ref("");
const password = ref("");
const gender = ref("");
const keyword = ref("");
const tanggal = ref("");
const files = ref([]);
const status = ref("");
const agree = ref(false);
const errorMsg = ref("Anda harus menyetujui syarat dan ketentuan");
const isActive = ref(false);
const errorMsgToggle = ref("Anda harus mengaktifkan notifikasi");
const description = ref("");
const tabs = ref([
    { key: "tab1", label: "Form Isian" },
    { key: "tab2", label: "Ringkasan" },
    { key: "tab3", label: "Pengaturan" }
]);
const activeTab = ref(tabs.value[0].key);
const columns = ref([
    { key: "name", label: "Nama" },
    { key: "email", label: "Email" },
    { key: "role", label: "Peran" }
]);
const tableData = ref([
    { name: "Andi", email: "andi@example.com", role: "Admin" },
    { name: "Budi", email: "budi@example.com", role: "User" },
    { name: "Citra", email: "citra@example.com", role: "Editor" }
]);
const loading = ref(false);
const pagination = ref({ current_page: 1, per_page: 10 });
const actions = ref([
    { name: 'edit', icon: 'Pencil', background: 'bg-yellow-500 hover:bg-yellow-700 focus:ring-blue-500' },
    { name: 'delete', icon: 'Trash2', background: 'bg-red-500 hover:bg-red-700 focus:ring-blue-500' }
]);

function onTableAction({ name, row }) {
    if (name === 'edit') {
        alert(`Edit: ${row.name}`);
    } else if (name === 'delete') {
        const ok = confirm(`Hapus ${row.name}?`);
        if (ok) {
            // contoh hapus dari local tableData
            tableData.value = tableData.value.filter(r => r !== row);
        }
    }
}
</script>

<template>
    <Header />
    <div class="page-wrapper bg-white w-3/4 mx-auto p-5 mt-4">
        <div class="grid lg:grid-cols-3 cols-6 gap-2">
            <div class="p-6 space-y-4">
                <Input
                    label="Username"
                    name="search"
                    placeholder="Masukan Username"
                    v-model:value="username"
                    :icon="Search"
                    iconPosition="left"
                    :error="false"
                    required
                />
                <Input
                    label="Password"
                    name="search"
                    placeholder="Masukan Password"
                    type="password"
                    v-model:value="password"
                    :icon="Lock"
                    iconPosition="left"
                    :error="false"
                />
                <Radio
                    name="gender"
                    label="Pilih Gender"
                    :options="[
                        { value: 'male', label: 'Laki-laki', icon: Check },
                        { value: 'female', label: 'Perempuan', icon: User }
                    ]"
                    v-model:value="gender"
                    required
                />
                <SearchInput
                    label="Cari Produk"
                    name="search"
                    v-model="keyword"
                />
                <Select
                    label="Filter Status"
                    filter
                    v-model:value="status"
                    :options="[
                        { value: 'aktif', label: 'Aktif' },
                        { value: 'nonaktif', label: 'Nonaktif' },
                    ]"
                />
                <Checkbox
                    label="Saya setuju dengan syarat dan ketentuan"
                    v-model:checked="agree"
                    :error="agree ? false : errorMsg"
                    required
                />
                <Checkbox
                    label="Saya bukan robot"
                    v-model:checked="agree"
                    required
                />
                <Toggle
                    label="Aktifkan notifikasi"
                    descriptionTrue="Notifikasi aktif"
                    descriptionFalse="Notifikasi mati"
                    v-model:value="isActive"
                    :error="isActive ? false : errorMsgToggle"
                    required
                />
                <Toggle
                    label="Status"
                    descriptionTrue="Status aktif"
                    descriptionFalse="Status mati"
                    v-model:value="isActive"
                    required
                />
                <FileUpload
                    label="Unggah Dokumen"
                    name="dokumen"
                    v-model="files"
                    multiple
                    accept=".pdf,.docx,.jpg,.png"
                    required
                />
                <TextArea
                    label="Deskripsi"
                    name="description"
                    v-model="description"
                    rows="5"
                    placeholder="Masukkan deskripsi..."
                />
                <DatePicker
                    label="Tanggal Lahir"
                    placeholder="Pilih tanggal"
                    :value="tanggal"
                    :onChange="v => tanggal = v"
                    :onClearError="() => tanggal = ''"
                />
                <div class="flex gap-2">
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
            </div>
            <div class="p-6 space-y-4">
                <div class="flex gap-2">
                    <Badge label="Aktif" color="primary" size="sm" />
                    <Badge label="Sukses" color="success" :icon="Check" />
                </div>
                <Card
                    title="Total Mahasiswa"
                    :value="1280"
                    background="bg-gradient-to-br from-indigo-600 to-indigo-400"
                    :icon="Users"
                />
                <Card
                    title="Total Mahasiswa"
                    :value="1280"
                    background="bg-gradient-to-br from-green-500 to-emerald-600"
                    :icon="FileText"
                />
                <HighlightCard
                    title="Peringatan Penting"
                    iconName="AlertTriangle"
                    iconBg="bg-red-500"
                >
                    Ini adalah pesan penting yang harus diperhatikan.
                </HighlightCard>
                <br />
                <InfoCard :icon="AlertCircle" iconBg="bg-blue-300 text-blue-500" title="Informasi Penting">
                    Ini adalah pesan penting untuk pengguna.
                </InfoCard>
                <br />
                <SummaryPage title="Dashboard" subtitle="Halaman Utama" />
            </div>
            <div class="p-6 space-y-4">
                <div class="mt-6">
                    <Tabs :tabs="tabs" v-model="activeTab" />
                    <div class="mt-4">
                        <template v-if="activeTab === 'tab1'">
                            <div class="p-4 bg-gray-50 rounded">Ini konten form di sini.</div>
                        </template>
                        <template v-else-if="activeTab === 'tab2'">
                            <div class="p-4 bg-gray-50 rounded">Ini konten ringkasan di sini.</div>
                        </template>
                        <template v-else>
                            <div class="p-4 bg-gray-50 rounded">Ini konten pengaturan di sini.</div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="mt-6">
                <Table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" :actions="actions" @action="onTableAction" />
            </div>
        </div>
    </div>
    <Footer />
</template>
