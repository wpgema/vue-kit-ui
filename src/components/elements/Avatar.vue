<template>
    <div
        class="relative rounded-full overflow-hidden"
        :class="className"
        :style="{ width: dimension + 'px', height: dimension + 'px' }"
    >
        <img
            :src="src || '/images/user/avatar.png'"
            :alt="alt"
            :width="dimension"
            :height="dimension"
            class="object-cover w-full h-full"
        />
    </div>
</template>

<script>
export default {
    name: "Avatar",

    props: {
        src: String,
        alt: { type: String, default: "User" },
        size: { type: String, default: "md" },
        className: { type: String, default: "" },
    },

    computed: {
        dimension() {
        const sizeMap = { sm: 32, md: 48, lg: 64 };
        return sizeMap[this.size] || sizeMap.md;
        },
    },
};
</script>
