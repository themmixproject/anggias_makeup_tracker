<template>
    <div class="tracker-list-item">
        <div class="icon-container">
            <inline-svg
                :src="trackerData.iconPath"
                class="icon-vector"
            ></inline-svg>
        </div>
        <div class="tracker-list-item-attribute-container">
            <div class="tracker-title">{{ trackerData.makeupName }}</div>
            <div class="tracker-date-wrapper">
                due date:
                <span class="tracker-date">{{ expireDate }}</span>
            </div>
            <div class="tracker-progress-bar">
                <div
                    class="tracker-progress-bar-indicator"
                    :style="{ width: progressBarWidth }"
                ></div>
            </div>
        </div>
        <div class="meatball-menu-wrapper">
            <div
                class="meatball-menu-overlay"
                v-show="meatballOverlayDisplay"
                @mousedown="
                    toggleMeatballMenu();
                    toggleMeatballMenuOverlay();
                "
                @touchstart="
                    toggleMeatballMenu();
                    toggleMeatballMenuOverlay();
                "
            ></div>
            <div class="meatball-menu" v-show="meatballMenuDisplay">
                <div class="meatball-menu-item" @click="deleteTracker">
                    delete
                </div>
                <hr />
                <div class="meatball-menu-item" @click="editTracker">edit</div>
            </div>
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
        },
        expireDate() {
            let openedDate = new Date(this.trackerData.openedDate);
            let approxExpireDate = new Date(
                new Date(openedDate).setMonth(
                    openedDate.getMonth() + this.trackerData.expiresInMonths
                )
            );

            return (
                approxExpireDate.getDay() +
                "-" +
                approxExpireDate.getMonth() +
                "-" +
                approxExpireDate.getFullYear()
            );
        }
    },
    methods: {
        percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
        },
        calcDiffInDays(startDate, endDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);

            let diffTime = Math.abs(endDate - startDate);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
    background-color: #ffa0d1;
    padding: 0.5em;
    padding-right: 0.1em;
    display: flex;
    flex-direction: row;

    .icon-container {
        height: 50px;
        width: 50px;
        background-color: #e585b6;

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
        text-align: initial;
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        display: flex;
        gap: 0.3em;
        flex-direction: column;
        justify-content: space-between;

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

        .tracker-date-wrapper {
            color: #aa6589;
            font-size: 0.8em;
            font-style: italic;
            .tracker-date {
                display: inline-block;
                text-decoration: wavy;
            }
        }

        .tracker-progress-bar {
            background-color: #df68a4;
            height: 15px;

            border-radius: 20px;
        }

        .tracker-progress-bar-indicator {
            background-color: #a10956;
            height: inherit;
            border-radius: 100px;
            min-width: 15px;
        }
    }

    .meatball-menu-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        .meatball-menu-overlay {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: transparent;
            z-index: 1;
        }

        .meatball-menu-icon-container {
            display: flex;
            flex-direction: row;
            padding: 0.4em;

            .meatball-menu-icon {
                height: 8px;
                width: 8px;
                margin: 0 1.5px;
                border-radius: 50%;
                background-color: #15031b;
            }
        }

        .meatball-menu {
            position: absolute;
            right: 12px;
            top: 50px;
            background-color: rgb(255, 185, 223);
            box-shadow: 0 0 0.8em 0.3em rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            z-index: 1;

            .meatball-menu-item {
                text-align: center;
                padding: 10px 20px;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
            }

            hr {
                margin: 0;
                padding: 0;
                height: 1px;
                border: 0;
                background-color: rgba(0, 0, 0, 0.123);
            }
        }
    }
}
</style>
