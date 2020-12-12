<template>
    <div class="list-item" v-if="sortBy === item.type || sortBy === 'ALL'">
       <i v-if="item.type === 'INCOME'" class="el-icon-top green"></i>
       <i v-else class="el-icon-bottom red"></i>
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value" :style="[item.value > 0 ? {color: 'green'} : {color: 'red'}]">{{ item.value }}</span>
        <el-button type="danger" size="mini" @click="deleteItem(item.id)"
            >Delete</el-button
        >
    </div>
</template>

<script>

export default {
    name: "BudgetListItem",
    props: ["item", "sortBy"],
    methods: {
        deleteItem(id) {
            this.$emit("deleteItem", id);
        }
    }
};
</script>

<style scoped="true">
.list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
}
.budget-value {
    font-weight: bold;
    margin-left: auto;
    margin-right: 20px;
}
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>
