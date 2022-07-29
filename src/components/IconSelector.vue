<template>
    <div id="icon-container">
        <div
            v-for="(icon, key) in icons"
            :key="key"
            @click="selectIcon($event, icon)"
            class="icon-wrapper"
            :class="{ active: selectedIcon === icon }"
        >
            <inline-svg :src="icon" class="cosmetic-icon" />
        </div>
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
        selectIcon(event, icon) {
            event.currentTarget.attributes;
            this.selectedIcon = icon;
            console.log(this.selectedIcon);
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

.icon-wrapper {
    height: 50px;
    width: 50px;

    .cosmetic-icon {
        height: inherit;
        width: inherit;
    }
}
.icon-wrapper.active {
    background-color: hotpink;
}
</style>
