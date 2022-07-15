<template>
    <MakeupTracker title="Lorem Ipsum" />
    <MakeupTracker title="Title 2" />
    <MakeupTracker title="Title 3" />
    <AddTrackerButton @displayNewTrackerForm="toggleDisplayForm" />
    <NewTrackerForm
        v-show="NewTrackerFormIsVisible"
        @closeForm="toggleDisplayForm"
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
            NewTrackerFormIsVisible: false
        };
    },
    methods: {
        toggleDisplayForm() {
            this.NewTrackerFormIsVisible = !this.NewTrackerFormIsVisible;
        }
    }
};
</script>

<style lang="scss">
body {
    margin: 0;
}
</style>
