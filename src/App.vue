<template>
    <div v-for="(tracker, index) in trackers" v-bind:key="index">
        <MakeupTracker
            :title="tracker.title"
            :startdate="tracker.startDate"
            :enddate="tracker.endDate"
            :icon="tracker.icon"
        />
    </div>
    <bottom-menu></bottom-menu>
    <new-tracker-form
        @toggleForm="toggleDisplayForm"
        @createTracker="newTracker"
        v-show="NewTrackerFormIsVisible"
    />
</template>

<script>
import MakeupTracker from "./components/MakeupTracker.vue";
import NewTrackerForm from "./components/NewTrackerForm.vue";
import BottomMenu from "./components/BottomMenu.vue";

export default {
    name: "App",
    components: {
        MakeupTracker,
        NewTrackerForm,
        BottomMenu
    },
    data() {
        return {
            NewTrackerFormIsVisible: false,
            trackers: [
                {
                    title: "adfadf",
                    startDate: "2022-07-10",
                    endDate: "2022-07-25",
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
