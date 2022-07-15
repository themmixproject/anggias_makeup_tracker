<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MakeupTracker title="Lorem Ipsum" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MakeupTracker from "./components/MakeupTracker.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
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
