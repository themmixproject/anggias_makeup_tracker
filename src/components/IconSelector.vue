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

            this.$emit("iconsLoaded", this.icons);
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

    justify-content: space-between;
}

.icon-wrapper {
    height: 50px;
    width: 50px;
    padding: 2px;
    border: 5px solid transparent;

    .cosmetic-icon {
        height: inherit;
        width: inherit;
    }
}
.icon-wrapper.active {
    border: 5px solid #ffa0d1;
    border-radius: 12px;
    // border-radius: 50%;
    // padding: 5px;
}
</style>
