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
        v-show="NewTrackerFormIsVisible"
    />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";
import TrackerForm from "./components/TrackerForm.vue";

export default {
    name: "App",
    components: {
        MakeupTracker,
        TrackerForm
    },
    data() {
        return {
            NewTrackerFormIsVisible: true,
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
