<template>
    <div id="app">
        <Form></Form>
        <TotalBalance></TotalBalance>
        <SortingButtons @sortItems="sortItems"></SortingButtons>
        <BudgetList :list="getList" :sortBy="sortBy" @deleteItem="openDeleteDialog"></BudgetList>
        <Dialog
            :message="dialogMessage"
            :dialogVisible="dialogVisible"
            @dialogCancel="dialogCancel"
            @dialogConfirm="dialogConfirm"
        ></Dialog>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import Dialog from "@/components/Dialog";
import SortingButtons from "@/components/SortingButtons";
export default {
    name: "App",
    data: () => ({
        dialogMessage: "Do you want to delete the message?",
        dialogVisible: false,
        idDelete: "",
        sortBy: "ALL"
    }),
    computed: {
        ...mapGetters("list", ["getList"]),
    },
    methods: {
        ...mapActions("list", ["deleteItem"]),
        openDeleteDialog(id) {
            this.dialogMessage = "Do you want to delete the message?";
            this.idDelete = id;
            this.dialogVisible = true;
        },
        dialogCancel() {
            this.dialogVisible = false;
        },
        dialogConfirm() {
            this.deleteItem(this.idDelete);
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
