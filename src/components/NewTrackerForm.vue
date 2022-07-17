<template>
    <div id="tracker-form-container">
        <div id="tracker-form-header">
            <h1 id="tracker-form-title">Create new tracker</h1>
            <div @click="closeForm" id="form-close-button">X</div>
        </div>
        <h2 class="form-input-title">Makeup name</h2>
        <input type="text" class="form-input" v-model="title" />
        <button @click="createTracker" id="create-tracker-button">
            Create
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: ""
        };
    },
    methods: {
        closeForm() {
            this.$emit("toggleForm");
        },
        createTracker() {
            this.$emit("createTracker", this.title);
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
    height: 180px;
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
