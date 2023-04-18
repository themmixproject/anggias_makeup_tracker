<template>
    <tracker-form
        :editTrackerIndex="editTrackerIndex"
        :editTrackerData="editTrackerData"
        :formIsDisplayed="formIsDisplayed"
        @toggleDisplayForm="toggleTrackerForm"
        @createNewTracker="addTrackerToList"
        @confirmEditTracker="confirmEditTracker"
        v-show="formIsDisplayed"
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
        v-show="!formIsDisplayed"
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
            formIsDisplayed: false,
            trackers: []
        };
    },
    methods: {
        toggleTrackerForm() {
            this.formIsDisplayed = !this.formIsDisplayed;
            if (this.editTrackerData) {
                this.editTrackerData = null;
                this.editTrackerIndex = -1;
            }
        },
        addTrackerToList(trackerData) {
            this.trackers.push(trackerData);
            this.toggleTrackerForm();
            this.saveChanges();
        },
        deleteTrackerFromList(trackerIndex) {
            this.trackers.splice(trackerIndex, 1);
            this.saveChanges();
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
            this.saveChanges();
        },
        saveChanges() {
            let cookieExpireDate = new Date();
            cookieExpireDate.setDate(cookieExpireDate.getDate() + 30);
            this.$cookies.set(
                "trackers",
                JSON.stringify(this.trackers),
                cookieExpireDate
            );
        }
    },
    mounted() {
        let savedTrackers = this.$cookies.get("trackers");
        if (savedTrackers !== null) {
            this.trackers = savedTrackers;
        }
    }
};
</script>

<style lang="scss">
body {
    margin: 0;
    background-color: #15031b;
}

#app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
