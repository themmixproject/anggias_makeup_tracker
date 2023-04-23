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
    text-align: center;
    color: white;
    box-shadow: 0 0 0.8em 0.3em rgba(0, 0, 0, 0.1);
    outline: 0;
    border: 0;

    font-size: 30px;

    position: fixed;
    bottom: 15px;
    right: 15px;
    padding: 0;
    margin: 0;
}
</style>
