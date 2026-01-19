<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

import { Menu, X, ChevronDown, MonitorCheck, User, LogOut } from "lucide-vue-next";

export default {
    components: {
        RouterLink,
        Menu,
        X,
        ChevronDown,
        MonitorCheck,
        User,
        LogOut,
    },

    setup() {
        const open = ref(false);
        const activeIndex = ref(null);
        const rootRef = ref(null);

        const menus = [
        { name: "Beranda", href: "/" },
        { name: "Transaksi", href: "/transactions" },
        { name: "Produk", href: "/products" },
        { name: "Modal", href: "/capitals" },
        { name: "Supplier", href: "/suppliers" },
        { name: "Kategori", href: "/categories" },
        {
            name: "Laporan",
            dropdown: [
            { name: "Modal", href: "/reports/capitals" },
            { name: "Produk", href: "/reports/products" },
            { name: "Penjualan", href: "/reports/sales" },
            { name: "Pendapatan", href: "/reports/revenue" },
            { name: "Keuntungan", href: "/reports/profits" },
            ],
        },
        {
            name: "Pengaturan",
            dropdown: [
            { name: "Toko", href: "/stores" },
            { name: "Karyawan", href: "/employees" },
            ],
        },
        { name: "Docs", href: "/docs" },
        ];

        const onDocClick = (e) => {
            const el = rootRef.value;
            if (!el) return;
            if (!el.contains(e.target)) {
                activeIndex.value = null;
            }
        };

        onMounted(() => document.addEventListener("click", onDocClick));
        onBeforeUnmount(() => document.removeEventListener("click", onDocClick));

        return { open, menus, activeIndex, rootRef };
    },
};
</script>

<template>
    <header ref="rootRef" class="w-full border-b border-gray-200 bg-white font-sans">
        <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm py-1 text-center font-medium">
            Selamat Datang Kembali di Aplikasi Aldebaran
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-2">
                    <div class="bg-blue-600 w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        <MonitorCheck size="16" />
                    </div>
                    <span class="text-lg font-bold text-gray-900">E-Kasir</span>
                </div>

                <nav class="hidden md:flex md:items-center bg-white space-x-6 text-sm font-medium">
                    <template v-for="(item, index) in menus" :key="item.name">
                        <div v-if="item.dropdown" class="relative" @mouseenter="activeIndex = index">
                            <button type="button" class="flex items-center space-x-1 hover:text-blue-600" @click.stop="activeIndex = activeIndex === index ? null : index">
                                <span>{{ item.name }}</span>
                                <ChevronDown size="16" />
                            </button>

                            <div
                                v-show="activeIndex === index"
                                :class="activeIndex === index ? 'absolute left-0 top-full mt-0 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-50 pointer-events-auto translate-y-0 opacity-100 visible transition-all duration-150' : 'absolute left-0 top-full mt-0 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-50 pointer-events-none translate-y-1 opacity-0 invisible transition-all duration-150'"
                            >
                                <div class="py-1">
                                    <RouterLink
                                        v-for="sub in item.dropdown"
                                        :key="sub.name"
                                        :to="sub.href"
                                        class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                                    >
                                        {{ sub.name }}
                                    </RouterLink>
                                </div>
                            </div>
                        </div>

                        <RouterLink
                            v-else
                            :to="item.href"
                            class="hover:text-blue-600"
                        >
                            {{ item.name }}
                        </RouterLink>
                    </template>

                <button class="hover:text-blue-600">
                    <span>Keluar</span>
                </button>
                </nav>

                <button
                    @click="open = !open"
                    class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    <div class="transition-transform duration-300 ease-in-out">
                        <X v-if="open" size="24" />
                        <Menu v-else size="24" />
                    </div>
                </button>
            </div>
        </div>

        <div
            class="md:hidden border-t border-gray-200 bg-white px-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out"
            :class="open ? 'max-h-screen py-3 opacity-100' : 'max-h-0 py-0 opacity-0'"
        >
            <div class="flex items-center justify-between py-3 border-b border-gray-100">
                <div class="flex items-center space-x-2 text-sm">
                    <div class="bg-gray-100 p-2 rounded-full">
                        <User size="16" class="text-gray-600" />
                    </div>
                    <div class="text-gray-700">
                        <div class="font-medium">Nama Pengguna</div>
                        <div class="text-xs text-gray-500 capitalize">role</div>
                    </div>
                </div>

                <button class="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut size="16" />
                    <span>Keluar</span>
                </button>
            </div>

            <template v-for="(item, index) in menus" :key="item.name">
                
                <details v-if="item.dropdown" class="group">
                    <summary class="flex text-sm font-semibold items-center justify-between cursor-pointer hover:text-slate-600 list-none">
                        {{ item.name }}
                        <ChevronDown size="16" class="transition-all group-open:rotate-180" />
                    </summary>

                    <div class="pl-4 mt-2 space-y-1">
                        <RouterLink
                            v-for="sub in item.dropdown"
                            :key="sub.name"
                            :to="sub.href"
                            class="block text-sm font-semibold my-3 text-gray-700 hover:text-blue-600"
                        >
                            {{ sub.name }}
                        </RouterLink>
                    </div>
                </details>

                <!-- NORMAL LINK -->
                <RouterLink
                    v-else
                    :to="item.href"
                    class="my-4 block text-sm font-semibold hover:text-blue-600"
                >
                    {{ item.name }}
                </RouterLink>

            </template>
        </div>
    </header>
</template>
