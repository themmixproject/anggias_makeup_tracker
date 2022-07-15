<template>
    <div id="add-tracker-button" @click="addNewTracker">+</div>
</template>

<script>
export default {
    methods: {
        addNewTracker() {
            this.$emit("displayNewTrackerForm");
        }
    }
};
</script>

<style lang="scss" scoped>
#add-tracker-button {
    background-color: #61ced6;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    color: white;
    box-shadow: 1px 1px 20px 1px #00000082;

    font-weight: bold;
    font-size: 2.5em;

    position: fixed;
    bottom: 15px;
    right: 15px;
}
</style>
