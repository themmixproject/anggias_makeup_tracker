<template>
    <div class="tracker-list-item">
        <div class="meatball-menu-wrapper">
            <div
                class="meatball-menu-overlay"
                v-show="meatballOverlayDisplay"
                @click="
                    toggleMeatballMenu();
                    toggleMeatballMenuOverlay();
                "
            ></div>
            <div
                class="meatball-menu-icon-container"
                @click="
                    toggleMeatballMenu();
                    toggleMeatballMenuOverlay();
                "
            >
                <div class="meatball-menu-icon"></div>
                <div class="meatball-menu-icon"></div>
                <div class="meatball-menu-icon"></div>
            </div>
            <div class="meatball-menu-container" v-show="meatballMenuDisplay">
                <div class="meatball-menu-item" @click="deleteTracker">
                    delete
                </div>
                <div class="meatball-menu-item" @click="editTracker">edit</div>
            </div>
        </div>
        <div class="tracker-list-item-content-container">
            <div class="icon-container">
                <inline-svg
                    :src="trackerData.iconPath"
                    class="icon-vector"
                ></inline-svg>
            </div>
            <div class="tracker-list-item-attribute-container">
                <div class="tracker-title">{{ trackerData.makeupName }}</div>
                <div class="tracker-date-wrapper">
                    Opened Date:
                    <span class="tracker-date">{{
                        trackerData.openedDate
                    }}</span>
                </div>
                <div class="tracker-date-wrapper">
                    Due Date:
                    <span class="tracker-date">{{
                        trackerData.expiresInMonths
                    }}</span>
                </div>
                <div class="tracker-progress-bar">
                    <div
                        class="tracker-progress-bar-indicator"
                        :style="{ width: progressBarWidth }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["trackerData", "trackerIndex"],
    data() {
        return {
            meatballMenuDisplay: false,
            meatballOverlayDisplay: false,
            approxExpireDate: new Date()
        };
    },
    computed: {
        progressBarWidth() {
            let openedDate = new Date(this.trackerData.openedDate);
            let approxExpireDate = new Date(openedDate).setMonth(
                openedDate.getMonth() + this.trackerData.expiresInMonths
            );

            let diffOpenedAndExpireInDays = this.calcDiffInDays(
                openedDate,
                approxExpireDate
            );

            let currentDate = new Date(Date.now()).setHours(0, 0, 0, 0);
            let diffCurrentEndInDays = this.calcDiffInDays(
                openedDate,
                currentDate
            );

            let widthPercentage = this.percentage(
                diffCurrentEndInDays,
                diffOpenedAndExpireInDays
            );

            if (widthPercentage > 100) return "100%";
            else return String(widthPercentage) + "%";
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
        },
        toggleMeatballMenu() {
            this.meatballMenuDisplay = !this.meatballMenuDisplay;
        },
        toggleMeatballMenuOverlay() {
            this.meatballOverlayDisplay = !this.meatballOverlayDisplay;
        },
        deleteTracker() {
            this.$emit("deleteTracker", this.trackerIndex);
            this.toggleMeatballMenu();
            this.toggleMeatballMenuOverlay;
        },
        editTracker() {
            this.$emit("editTracker", this.trackerIndex);
            this.toggleMeatballMenu();
            this.toggleMeatballMenuOverlay();
        }
    }
};
</script>

<style lang="scss" scoped>
.tracker-list-item {
    margin: 10px;
    border-radius: 20px;
    background-color: lightcoral;
    padding: 0.5em;
    padding-right: 0.8em;
}
.meatball-menu-wrapper {
    position: relative;
    .meatball-menu-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: transparent;
    }

    .meatball-menu-icon-container {
        display: flex;
        flex-direction: row;
        position: absolute;
        // float: right;
        top: 0px;
        right: 0px;
        .meatball-menu-icon {
            height: 8px;
            width: 8px;
            margin: 0 1.5px;
            border-radius: 50%;
            background-color: black;
        }
    }

    .meatball-menu-container {
        position: absolute;
        right: 0px;
        top: 20px;
        background-color: rgb(228, 228, 228);
        border-radius: 10px;

        .meatball-menu-item {
            text-align: center;
            padding: 10px 20px;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
        }
    }
}

.tracker-list-item-content-container {
    display: flex;
    flex-direction: row;

    .icon-container {
        height: 50px;
        width: 50px;
        background-color: #d66161;

        border-radius: 50%;
        flex-shrink: 0;
        align-self: center;
        padding: 10px;

        .icon-vector {
            height: inherit;
            width: inherit;
        }
    }
    .tracker-list-item-attribute-container {
        padding-left: 0.5em;
        flex-grow: 1;
        // white-space: nowrap;
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

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            padding-right: 33px;
        }

        .tracker-date {
            display: inline-block;
        }

        .tracker-progress-bar {
            background-color: #d66161;
            height: 15px;

            border-radius: 20px;
        }

        .tracker-progress-bar-indicator {
            background-color: black;
            height: inherit;
            border-radius: 100px;
        }
    }
}
</style>
