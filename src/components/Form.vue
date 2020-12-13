<template>
    <el-card class="form-card">
        <el-form
            ref="addItemForm"
            :model="formData"
            :rules="rules"
            label-position="elft"
        >
            <el-form-item label="Type" prop="type">
                <el-select
                    class="type-select"
                    v-model="formData.type"
                    placeholder="Choose type..."
                >
                    <el-option value="INCOME"></el-option>
                    <el-option value="OUTCOME"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Comment" prop="comment">
                <el-input
                    v-model="formData.comment"
                    placeholder="Enter your comment..."
                ></el-input>
            </el-form-item>
            <el-form-item label="Value" prop="value">
                <el-input
                    v-model.number="formData.value"
                    placeholder="value"
                ></el-input>
            </el-form-item>
            <el-button @click="onSubmit" type="primary">Submit</el-button>
        </el-form>
    </el-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Form",
    data() {
        var checkValue = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("Please input the value"));
            }
            if (!Number.isInteger(value)) {
                callback(new Error("Please input digits"));
            } else {
                if (value === 0) {
                    callback(new Error("Value must not be 0"));
                } else {
                    callback();
                }
            }
        };
        return {
            formData: {
                type: "INCOME",
                comment: "",
                value: 0
            },
            rules: {
                type: [
                    {
                        required: true,
                        message: "Please, select type",
                        trigger: "blur"
                    }
                ],
                comment: [
                    {
                        required: true,
                        message: "Please, enter comment",
                        trigger: "blur"
                    }
                ],
                value: [{ validator: checkValue, trigger: "blur" }]
            }
        };
    },
    methods: {
        ...mapActions("list", ["addItem"]),
        onSubmit() {
            this.$refs.addItemForm.validate(valid => {
                if (valid) {
                    if (
                        this.formData.type === "OUTCOME" &&
                        this.formData.value > 0
                    ) {
                        this.formData.value = -this.formData.value;
                    }
                    this.addItem({ ...this.formData });
                    this.$refs.addItemForm.resetFields();
                }
            });
        }
    }
};
</script>

<style scoped="true">
.form-card {
    max-width: 500px;
    margin: auto;
}
.type-select {
    width: 100%;
}
</style>
