<template>
    <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        center
        :close-on-click-modal="false"
        :show-close="false"
    >
        <span>{{ message }}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">Cancel</el-button>
            <el-button type="primary" @click="confirm">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: ["message", "dialogVisible"],
    data: () => ({}),
    methods: {
        cancel() {
            this.$emit("dialogCancel");
        },
        confirm() {
            this.$emit("dialogConfirm");
        }
    }
};
</script>

<style scoped="true"></style>
