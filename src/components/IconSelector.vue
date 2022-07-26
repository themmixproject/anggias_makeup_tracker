<template>
    <div id="icon-container">
        <inline-svg
            v-for="(icon, key) in icons"
            :src="icon"
            :key="key"
            @click="selectIcon(icon)"
            class="cosmetic-icon"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: {},
            selectedIcon: ""
        };
    },
    mounted() {
        this.icons = {};
        const ctx = require.context(
            "../assets/cosmetic icons/",
            false,
            /\.svg$/
        );
        this.importAll(ctx);
    },
    methods: {
        importAll(r) {
            let icns = {};
            r.keys().forEach((key) => (icns[key] = r(key)));
            this.icons = icns;
        },
        selectIcon(icon) {
            this.$emit("selectIcon", icon);
        }
    }
};
</script>

<style lang="scss" scoped>
#icon-container {
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
}

.cosmetic-icon {
    height: 50px;
    width: 50px;
}
</style>
