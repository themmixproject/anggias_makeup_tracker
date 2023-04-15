<template>
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            :trackerData="tracker"
            :title="tracker.title"
            :startdate="tracker.startDate"
            :enddate="tracker.endDate"
            :icon="tracker.icon"
        />
    </div>
    <tracker-form
        @toggleForm="toggleTrackerForm"
        @createNewTracker="addTrackerToList"
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
                    makeupName: "adfadf",
                    openedDate: "2023-04-5",
                    expiresInMonths: 1,
                    // iconPath: "img/Cosmetic_Mascara.57ba9a86.svg"
                    iconPath: "/img/Cosmetic_Palette.e169cc48.svg"
                }
            ]
        };
    },
    methods: {
        toggleTrackerForm() {
            this.formIsVisible = !this.formIsVisible;
        },
        addTrackerToList(trackerData) {
            this.trackers.push(trackerData);
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
