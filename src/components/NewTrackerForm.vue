<template>
    <div id="tracker-form-container">
        <div @click="closeForm" id="form-close-button">X</div>
    </div>
</template>

<script>
export default {
    methods: {
        closeForm() {
            this.$emit("closeForm");
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

    background-color: rgb(117, 117, 117);

    border-radius: 20px 20px 0 0;

    display: flex;
    flex-direction: column;

    #form-close-button {
        height: 30px;
        width: 30px;
        line-height: 30px;
        color: white;

        background-color: red;

        align-self: flex-end;
        text-align: center;
    }
}
</style>
