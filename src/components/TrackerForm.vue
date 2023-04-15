<template>
    <div id="tracker-form-container">
        <div id="tracker-form-header">
            <h1 id="tracker-form-title">Create new tracker</h1>
            <button @click="closeForm" id="form-close-button">✕</button>
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Makeup name:</label>
            </div>
            <input type="text" class="form-input" v-model="title" />
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Start date:</label>
            </div>
            <input type="date" class="form-input" v-model="startDate" />
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Expire date (in months):</label>
            </div>
            <input type="number" class="form-input" v-model="endDate" />
        </div>

        <div id="icon-selector-container">
            <div id="icon-selector-label-container">
                <label>Select icon:</label>
            </div>
            <IconSelector @selectIcon="setIcon" />
        </div>

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
button {
    border: 0;
    outline: 0;
}

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

    #tracker-form-header {
        display: flex;
        justify-content: space-between;

        #tracker-form-title {
            font-size: 1.3em;
            margin: 0;
        }

        #form-close-button {
            background-color: transparent;
            font-size: 1.5em;
            padding: 0;
            color: white;
        }
    }
    .form-input-container {
        margin: 10px 0;
        display: flex;
        flex-direction: row;

        .form-label-container {
            display: flex;
            flex-direction: column;
            justify-content: center;

            label {
                margin: 0;
                font-size: 1.2em;
                text-align: left;
                white-space: nowrap;
                margin-right: 7px;
            }
        }

        input {
            font-size: 1.2em;
            width: 100%;
            padding: 3px;
            margin: 0;
            border: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    #icon-selector-container {
        margin: 10px 0;

        #icon-selector-label-container {
            font-size: 1.2em;
            margin-bottom: 5px;
        }
    }

    #create-tracker-button {
        padding: 10px;
        font-size: 1em;

        background-color: rgb(158, 200, 255);
        border: 0;

        width: 100%;
        color: white;
        border-radius: 50px;
    }
}
</style>
