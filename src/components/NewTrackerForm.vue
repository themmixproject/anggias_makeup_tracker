<template>
    <div id="tracker-form-container">
        <div id="tracker-form-header">
            <h1 id="tracker-form-title">Create new tracker</h1>
            <div @click="closeForm" id="form-close-button">X</div>
        </div>
        <label class="form-input-title">Makeup name</label>
        <input type="text" class="form-input" v-model="title" />

        <label class="form-input-title">Start date</label>
        <input type="date" class="form-input" v-model="startDate" />

        <label class="form-input-title">End date</label>
        <input type="date" class="form-input" v-model="endDate" />

        <IconSelector @selectIcon="setIcon" />

        <button
            @click="createTracker"
            id="create-tracker-button"
            :disabled="title === ''"
        >
            Create
        </button>
    </div>
</template>

<script>
import IconSelector from "./IconSelector.vue";

export default {
    components: {
        IconSelector
    },
    data() {
        return {
            title: "test",
            startDate: "2030-08-06",
            endDate: "2030-08-07",
            icon: ""
        };
    },
    methods: {
        closeForm() {
            this.$emit("toggleForm");
            this.title = "";
        },
        createTracker() {
            let trackerObject = {
                title: this.title,
                startDate: this.startDate,
                endDate: this.endDate,
                icon: this.icon
            };
            this.$emit("createTracker", trackerObject);
            this.title = "";
        },
        setIcon(icon) {
            this.icon = icon;
        }
    }
};
</script>

<style lang="scss" scoped>
#tracker-form-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 10px 0 10px;
    padding: 10px;
    color: white;

    background-color: rgb(117, 117, 117);

    border-radius: 20px 20px 0 0;

    display: flex;
    flex-direction: column;

    #tracker-form-header {
        display: flex;
        align-self: stretch;
        margin-bottom: 5px;

        #tracker-form-title {
            font-size: 1.3em;
            margin: 0;
        }

        #form-close-button {
            height: 30px;
            width: 30px;
            line-height: 30px;
            color: white;

            background-color: red;

            margin-left: auto;
            text-align: center;
        }
    }

    .form-input-title {
        margin: 0;
        font-size: 0.8em;
    }

    .form-input {
        font-size: 1.5em;
    }

    #create-tracker-button {
        margin-top: auto;
        align-self: flex-start;
        padding: 10px;
        font-size: 0.8em;

        background-color: rgb(158, 200, 255);
        border: 0;
    }
}
</style>
