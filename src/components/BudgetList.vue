<template>
    <div class="budget-list-wraper">
        <el-card :header="header">
            <template v-if="isNotEmpty">
                <BudgetListItem
                    :item="item"
                    v-for="(item, prop) in list"
                    :key="prop"
                    :sortBy="sortBy"
                    @deleteItem="deleteItem"
                    >1</BudgetListItem
                >
            </template>
            <el-alert
                v-else
                type="info"
                :title="emptyTtitle"
                :closable="false"
            ></el-alert>
        </el-card>
    </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem";
export default {
    name: "BudgetList",
    props: {
        list: {
            type: Object,
            default: () => ({})
        },
        sortBy: {
            type: String,
            default: "ALL"
        }
    },
    data: () => ({
        header: "Budget List",
        emptyTtitle: "The list is empty"
    }),
    methods: {
        deleteItem(id) {
            this.$emit("deleteItem", id);
        }
    },
    computed: {
        isNotEmpty() {
            return Boolean(Object.keys(this.list).length);
        }
    },
    components: {
        BudgetListItem
    }
};
</script>

<style scoped="true">
.budget-list-wraper {
    max-width: 500px;
    margin: auto;
}
</style>
