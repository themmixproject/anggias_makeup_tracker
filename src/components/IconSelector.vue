<template>
    <div id="icon-container">
        <div
            v-for="(iconPath, key) in icons"
            :key="key"
            @click="selectIcon($event, iconPath)"
            class="icon-wrapper"
            :class="{ active: selectedIcon === iconPath }"
        >
            <inline-svg :src="iconPath" class="cosmetic-icon" />
        </div>
    </div>
</template>

<script>
export default {
    props: ["editTrackerIconPath"],
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
        selectIcon(event, iconPath) {
            console.log(this.icons);

            this.selectedIcon = iconPath;
            console.log(this.selectedIcon);
            this.$emit("selectIcon", iconPath);
        }
    },
    updated() {
        if (this.editTrackerIconPath !== "") {
            this.selectedIcon = this.editTrackerIconPath;
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
