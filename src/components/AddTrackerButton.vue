<template>
    <button id="add-tracker-button" @click="displayForm">+</button>
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
    line-height: 50px;
    text-align: center;
    color: white;
    box-shadow: 0 0 0.8em 0.3em rgba(0, 0, 0, 0.1);
    outline: 0;
    border: 0;

    font-weight: bold;
    font-size: 3.5em;

    position: fixed;
    bottom: 15px;
    right: 15px;
}
</style>
