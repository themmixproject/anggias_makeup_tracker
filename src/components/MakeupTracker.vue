<template>
    <div class="tracker-item">
        <div class="icon-placeholder"></div>
        <div class="content-container">
            <div class="tracker-title">{{ title }}</div>
            <div class="tracker-date">Opened Date: {{ startdate }}</div>
            <div class="tracker-date">Due Date: {{ enddate }}</div>
            <div class="tracker-progress-bar">
                <div class="tracker-progress-bar-indicator"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "startdate", "enddate"]
};
</script>

<style lang="scss" scoped>
.tracker-item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.tracker-item {
    margin: 10px;
    border-radius: 20px;
    background-color: lightcoral;
    padding: 0.5em;
    display: flex;
    .icon-placeholder {
        height: 60px;
        width: 60px;
        background-color: #d66161;

        border-radius: 50%;
        flex-shrink: 0;
        align-self: center;
    }
    .content-container {
        padding-left: 1em;
        flex-grow: 1;
        white-space: nowrap;
        text-align: initial;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        overflow: hidden;
        text-overflow: ellipsis;

        .tracker-title {
            font-size: 1.5em;
            font-weight: normal;

            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tracker-progress-bar {
            background-color: #d66161;
            height: 15px;

            border-radius: 20px;
        }

        .tracker-progress-bar-indicator {
            background-color: black;
            height: inherit;

            width: 25%;

            border-radius: 100px;
        }
    }
    .content-container > * {
        margin: 2px;
    }
}
</style>
