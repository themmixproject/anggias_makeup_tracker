<template>
    <tracker-form
        :editTrackerIndex="editTrackerIndex"
        :editTrackerData="editTrackerData"
        @toggleDisplayForm="toggleTrackerForm"
        @createNewTracker="addTrackerToList"
        @confirmEditTracker="confirmEditTracker"
        v-show="formIsVisible"
    />
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            :trackerData="tracker"
            :trackerIndex="index"
            @deleteTracker="deleteTrackerFromList"
            @editTracker="editTracker"
        />
    </div>
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
            editTrackerData: null,
            editTrackerIndex: 0,
            formIsVisible: false,
            trackers: [
                {
                    makeupName: "adfadf",
                    openedDate: "2023-04-05",
                    expiresInMonths: 1,
                    iconPath: "/img/Cosmetic_Palette.e169cc48.svg"
                },
                {
                    makeupName: "43ref",
                    openedDate: "2023-04-05",
                    expiresInMonths: 1,
                    iconPath: "/img/Cosmetic_Palette.e169cc48.svg"
                },
                {
                    makeupName: "cvnre",
                    openedDate: "2023-04-05",
                    expiresInMonths: 1,
                    iconPath: "/img/Cosmetic_Palette.e169cc48.svg"
                }
            ]
        };
    },
    methods: {
        toggleTrackerForm() {
            this.formIsVisible = !this.formIsVisible;
            if (this.editTrackerData) {
                this.editTrackerData = null;
                this.editTrackerIndex = -1;
            }
        },
        addTrackerToList(trackerData) {
            this.trackers.push(trackerData);
            this.toggleTrackerForm();
        },
        deleteTrackerFromList(trackerIndex) {
            this.trackers.splice(trackerIndex, 1);
        },
        editTracker(trackerIndex) {
            this.toggleTrackerForm();
            this.editTrackerData = this.trackers[trackerIndex];
            this.editTrackerIndex = trackerIndex;
        },
        confirmEditTracker(trackerIndex, trackerData) {
            this.trackers[trackerIndex] = trackerData;
            this.toggleTrackerForm();
            this.editTrackerData = null;
            this.editTrackerIndex = -1;
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
