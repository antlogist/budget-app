<template>
    <el-button-group>
        <el-button
            @click="sortItems('INCOME')"
            type="success"
            icon="el-icon-top"
        ></el-button>
        <el-button
            @click="sortItems('OUTCOME')"
            type="danger"
            icon="el-icon-bottom"
        ></el-button>
        <el-button
            @click="sortItems('ALL')"
            type="primary"
            icon="el-icon-check"
        ></el-button>
    </el-button-group>
</template>

<script>
export default {
    name: "SortingButtons",
    methods: {
        sortItems(type) {
            this.$emit("sortItems", type)
        },
        showOutcome() {},
        showAll() {}
    }
};
</script>

<style scoped="true"></style>
