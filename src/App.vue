<template>
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            v-bind:title="tracker.title"
            v-bind:startdate="tracker.startDate"
            v-bind:enddate="tracker.endDate"
        />
    </div>
    <AddTrackerButton @displayNewTrackerForm="toggleDisplayForm" />
    <NewTrackerForm
        @toggleForm="toggleDisplayForm"
        @createTracker="newTracker"
        v-show="NewTrackerFormIsVisible"
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
            NewTrackerFormIsVisible: true,
            trackers: [{ title: "adfadf" }]
        };
    },
    methods: {
        toggleDisplayForm() {
            this.NewTrackerFormIsVisible = !this.NewTrackerFormIsVisible;
        },
        newTracker(trackerName) {
            this.trackers.push(trackerName);
            this.toggleDisplayForm();
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
