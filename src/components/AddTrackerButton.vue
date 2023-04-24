<template>
    <button id="add-tracker-button" @click="displayForm">
        <div id="add-tracker-icon"></div>
    </button>
</template>

<script>
export default {
    methods: {
        displayForm() {
            this.$emit("displayTrackerForm");
        }
    }
};
</script>

<style lang="scss" scoped>
#add-tracker-button {
    background-color: #dd0072;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0.8em 0.3em rgba(0, 0, 0, 0.1);
    outline: 0;
    border: 0;
    padding: 0;

    position: fixed;
    bottom: 15px;
    right: 50px;
    color: white;

    #add-tracker-icon {
        background: url("../assets/plus-icon.svg");
        background-size: contain;
        position: absolute;

        top: 8px;
        bottom: 8px;
        left: 8px;
        right: 8px;
    }
}
</style>
