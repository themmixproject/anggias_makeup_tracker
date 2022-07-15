<template>
    <MakeupTracker title="Lorem Ipsum" />
    <MakeupTracker title="Title 2" />
    <MakeupTracker title="Title 3" />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";

export default {
    name: "App",
    components: {
        MakeupTracker
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
