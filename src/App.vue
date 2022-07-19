<template>
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            :title="tracker.title"
            :startdate="tracker.startDate"
            :enddate="tracker.endDate"
            :food="apple"
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
            trackers: [
                {
                    title: "adfadf",
                    startDate: "2022-07-10",
                    endDate: "2022-07-25"
                }
            ]
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
