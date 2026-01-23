<script setup>
import { ref } from "vue";
import { Button } from "../../packages/ui/src/components/button";
</script>

<template>
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
</template>
