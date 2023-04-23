<template>
    <div id="tracker-form-container">
        <div id="tracker-form-header">
            <h1 v-if="editTrackerData">Edit Tracker</h1>
            <h1 v-else>Create New Tracker</h1>
            <button @click="closeForm" id="form-close-button">✕</button>
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Makeup name:</label>
            </div>
            <input
                type="text"
                class="form-input"
                ref="makeupNameInput"
                v-model="makeupName"
            />
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Start date:</label>
            </div>
            <input type="date" class="form-input" v-model="openedDate" />
        </div>
        <div class="form-input-container">
            <div class="form-label-container">
                <label>Expire date (in months):</label>
            </div>
            <input type="number" class="form-input" v-model="expiresInMonths" />
        </div>

        <div id="icon-selector-container">
            <div id="icon-selector-label-container">
                <label>Select icon</label>
            </div>
            <IconSelector
                @selectIcon="setSelectedIconPath"
                @iconsLoaded="setDefaultIconPath"
                :editTrackerIconPath="selectedIconPath"
            />
        </div>

        <div id="edit-tracker-button-container" v-if="editTrackerData">
            <button @click="confirmEdit">Confirm</button>
            <button @click="closeForm">Cancel</button>
        </div>
        <button
            v-else
            @click="createTracker"
            id="create-tracker-button"
            :disabled="makeupName === '' || selectedIconPath === ''"
        >
            Create
        </button>
    </div>
</template>

<script>
import IconSelector from "./IconSelector.vue";

export default {
    props: ["editTrackerIndex", "editTrackerData", "formIsDisplayed"],
    components: {
        IconSelector
    },
    data() {
        return {
            makeupName: "",
            openedDate: "",
            expiresInMonths: 0,
            selectedIconPath: "",
            formValuesAreLoaded: false,
            defaultIconPath: ""
        };
    },
    methods: {
        closeForm() {
            this.$emit("toggleDisplayForm");
            this.formValuesAreLoaded = false;
        },
        createTracker() {
            let trackerData = {
                makeupName: this.makeupName,
                openedDate: this.openedDate,
                expiresInMonths: this.expiresInMonths,
                iconPath: this.selectedIconPath
            };

            this.formValuesAreLoaded = false;

            this.$emit("createNewTracker", trackerData);
        },
        confirmEdit() {
            let trackerData = {
                makeupName: this.makeupName,
                openedDate: this.openedDate,
                expiresInMonths: this.expiresInMonths,
                iconPath: this.selectedIconPath
            };

            this.formValuesAreLoaded = false;

            this.$emit(
                "confirmEditTracker",
                this.editTrackerIndex,
                trackerData
            );
        },
        setSelectedIconPath(iconPath) {
            this.selectedIconPath = iconPath;
        },
        loadDefaultValues() {
            this.makeupName = "";
            this.openedDate = this.getCurrentDateString();
            this.expiresInMonths = 1;
            this.selectedIconPath = this.defaultIconPath;
        },
        getCurrentDateString() {
            let today = new Date();
            let day = String(today.getDate()).padStart(2, "0");
            let month = String(today.getMonth() + 1).padStart(2, "0");
            let year = today.getFullYear();

            return year + "-" + month + "-" + day;
        },
        setDefaultIconPath(icons) {
            this.defaultIconPath = icons[Object.keys(icons)[0]];
        }
    },
    updated() {
        if (this.formIsDisplayed) {
            if (this.editTrackerData !== null && !this.formValuesAreLoaded) {
                this.makeupName = this.editTrackerData.makeupName;
                this.openedDate = this.editTrackerData.openedDate;
                this.expiresInMonths = this.editTrackerData.expiresInMonths;
                this.selectedIconPath = this.editTrackerData.iconPath;
            } else if (
                this.editTrackerData === null &&
                !this.formValuesAreLoaded
            ) {
                this.loadDefaultValues();
                this.$refs.makeupNameInput.focus();
            }

            this.formValuesAreLoaded = true;
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
    color: black;
    background-color: white;

    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 0.8em 0.3em rgba(0, 0, 0, 0.1);

    #tracker-form-header {
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 1.3em;
            margin: 0;
            font-weight: 500;
        }

        #form-close-button {
            background-color: transparent;
            font-size: 1.5em;
            padding: 0;
            color: black;
            font-weight: bold;
        }
    }
    .form-input-container {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        background-color: #e2e2e2;
        border-radius: 0.5em;

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
                color: #757575;
                padding-left: 10px;
            }
        }

        input {
            font-size: 1.2em;
            width: 100%;
            padding: 10px;
            margin: 0;
            border: 0;
            outline: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background-color: #e2e2e2;
            border-radius: inherit;
        }

        input:focus {
            background-color: #d0d0d0;
        }
    }

    #icon-selector-container {
        margin: 10px 0;
        background-color: #e2e2e2;
        padding: 10px;
        border-radius: 0.5em;

        #icon-selector-label-container {
            font-size: 1.2em;
            margin-bottom: 10px;
            text-align: center;

            label {
                color: #757575;
            }
        }
    }

    #create-tracker-button {
        padding: 10px;
        font-size: 1em;

        background-color: #ffa0d1;
        border: 0;

        width: 100%;
        color: white;
        border-radius: 50px;
    }

    #edit-tracker-button-container {
        display: flex;
        flex-direction: row;
        gap: 10px;

        button {
            padding: 10px;
            font-size: 1em;

            background-color: rgb(255 160 209);
            border: 0;

            width: 100%;
            color: white;
            border-radius: 50px;

            margin: 0;
        }
    }
}
</style>
