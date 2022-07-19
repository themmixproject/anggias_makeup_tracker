<template>
    <div class="tracker-item">
        <div class="icon-placeholder"></div>
        <div class="content-container">
            <div class="tracker-title">{{ title }}</div>
            <div class="tracker-date">Opened Date: {{ startdate }}</div>
            <div class="tracker-date">Due Date: {{ enddate }}</div>
            <div class="tracker-progress-bar">
                <div
                    class="tracker-progress-bar-indicator"
                    :style="{ width: progressBarWidth }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "startdate", "enddate", "food"],
    date() {
        return {
            startDate: this.$props.startdate,
            endDate: this.$props.enddate
        };
    },
    computed: {
        progressBarWidth() {
            let startDate = new Date(this.$props.startdate);
            let endDate = new Date(this.$props.enddate);
            let currentDate = new Date(Date.now()).setHours(0, 0, 0, 0);

            let diffStartEndDays = this.calcDiffInDays(startDate, endDate);
            let diffCurrentEndDays = this.calcDiffInDays(
                startDate,
                currentDate
            );

            console.log("Current: " + diffCurrentEndDays);
            console.log("Start: " + diffStartEndDays);

            let widthPercentage = this.percentage(
                diffCurrentEndDays,
                diffStartEndDays
            );

            console.log(widthPercentage);

            return String(widthPercentage) + "%";
        }
    },
    methods: {
        percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
        },
        calcDiffInDays(startDate, endDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);

            let startTime = startDate.getTime();
            let endTime = endDate.getTime();

            let diffStartEnd = endTime - startTime;

            return diffStartEnd / (1000 * 3600 * 24);
        }
    }
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

            // width: 25%;

            border-radius: 100px;
        }
    }
    .content-container > * {
        margin: 2px;
    }
}
</style>
