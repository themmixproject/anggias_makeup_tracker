<template>
    <MakeupTracker title="Lorem Ipsum" />
    <MakeupTracker title="Title 2" />
    <MakeupTracker title="Title 3" />
    <MakeupTracker title="Title 3" />
    <MakeupTracker title="Title 3" />
    <MakeupTracker title="Title 3" />
    <AddTrackerButton @displayNewTrackerForm="toggleDisplayForm" />
    <NewTrackerForm
        @toggleForm="toggleDisplayForm"
        @createTracker="newTracker"
    />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";
import AddTrackerButton from "./components/AddTrackerButton.vue";
import NewTrackerForm from "./components/NewTrackerForm.vue";

export default {
    name: "App",
    components: {
        MakeupTracker,
        AddTrackerButton,
        NewTrackerForm
    },
    data() {
        return {
            NewTrackerFormIsVisible: false,
            trackers: []
        };
    },
    methods: {
        toggleDisplayForm() {
            this.NewTrackerFormIsVisible = !this.NewTrackerFormIsVisible;
        },
        newTracker() {
            console.log("hello");
            this.trackers;
        }
    }
};
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
