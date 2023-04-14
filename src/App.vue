<template>
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            :title="tracker.title"
            :startdate="tracker.startDate"
            :enddate="tracker.endDate"
            :icon="tracker.icon"
        />
    </div>
    <tracker-form
        @toggleForm="toggleTrackerForm"
        @createTracker="newTracker"
        v-show="formIsVisible"
    />
    <add-tracker-button
        @displayTrackerForm="toggleTrackerForm"
        v-show="!formIsVisible"
    />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";
import TrackerForm from "./components/TrackerForm.vue";
import AddTrackerButton from "./components/AddTrackerButton.vue";

export default {
    name: "App",
    components: {
        MakeupTracker,
        TrackerForm,
        AddTrackerButton
    },
    data() {
        return {
            formIsVisible: true,
            trackers: [
                {
                    title: "adfadf",
                    startDate: "2022-07-10",
                    endDate: "2023-07-25",
                    icon: "img/Cosmetic_Mascara.57ba9a86.svg"
                }
            ]
        };
    },
    methods: {
        toggleTrackerForm() {
            this.formIsVisible = !this.formIsVisible;
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
