<template>
    <MakeupTracker title="Lorem Ipsum" />
    <MakeupTracker title="Title 2" />
    <MakeupTracker title="Title 3" />
    <AddTrackerButton />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";
import AddTrackerButton from "./components/AddTrackerButton.vue";

export default {
    name: "App",
    components: {
        MakeupTracker,
        AddTrackerButton
    }
};
</script>

<style lang="scss">
body {
    margin: 0;
}
</style>
