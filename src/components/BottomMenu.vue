<template>
    <div id="bottom-menu">
        <bottom-menu-button id="add-tracker-button"> + </bottom-menu-button>
        <bottom-menu-button id="delete-tracker-button">
            <!-- <img src="./assets/trash_icons.png" alt="recycle bin" /> -->
            Trash
        </bottom-menu-button>
    </div>
</template>

<script>
import BottomMenuButton from "./BottomMenuButton.vue";

export default {
    components: {
        BottomMenuButton
    }
};
</script>

<style lang="scss" scoped>
#bottom-menu {
    display: flex;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding-bottom: 10px;
}

#add-tracker-button {
    background-color: #61ced6;
}

#delete-tracker-button {
    background-color: #d66161;
}
</style>
