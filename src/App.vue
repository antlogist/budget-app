<template>
    <div id="app">
        <Form @submitForm="onFormSubmit"></Form>
        <TotalBalance :total="totalBalance"></TotalBalance>
        <SortingButtons @sortItems="sortItems"></SortingButtons>
        <BudgetList :list="list" :sortBy="sortBy" @deleteItem="openDeleteDialog"></BudgetList>
        <Dialog
            :message="dialogMessage"
            :dialogVisible="dialogVisible"
            @dialogCancel="dialogCancel"
            @dialogConfirm="dialogConfirm"
        ></Dialog>
    </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import Dialog from "@/components/Dialog";
import SortingButtons from "@/components/SortingButtons";
export default {
    name: "App",
    data: () => ({
        list: {
            1: {
                type: "INCOME",
                value: 100,
                comment: "Some income comment",
                id: 1
            },
            2: {
                type: "OUTCOME",
                value: -50,
                comment: "Some outcome comment",
                id: 2
            }
        },
        dialogMessage: "Do you want to delete the message?",
        dialogVisible: false,
        idDelete: "",
        sortBy: "ALL"
    }),
    computed: {
        totalBalance() {
            return Object.values(this.list).reduce(
                (acc, item) => acc + item.value,
                0
            );
        }
    },
    methods: {
        openDeleteDialog(id) {
            this.dialogMessage = "Do you want to delete the message?";
            this.idDelete = id;
            this.dialogVisible = true;
        },
        deleteItem() {
            this.$delete(this.list, this.idDelete);
        },
        onFormSubmit(data) {
            const newObj = {
                ...data,
                id: String(Math.random())
            };
            this.$set(this.list, newObj.id, newObj);
        },
        dialogCancel() {
            this.dialogVisible = false;
        },
        dialogConfirm() {
            this.deleteItem();
            this.dialogVisible = false;
        },
        sortItems(type) {
            this.sortBy = type;
        }
    },
    components: {
        BudgetList,
        TotalBalance,
        Form,
        Dialog,
        SortingButtons
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
