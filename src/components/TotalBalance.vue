<template>
    <div class="total-value" :class="totalValueClass">
        Balance: {{ totalBalance }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "TotalBalance",
    data: () => ({
        totalClass: "black"
    }),
    computed: {
        ...mapGetters("list", ["totalBalance"]),
        totalValueClass() {
            return this.totalBalance === 0
                ? "black"
                : this.totalBalance > 0
                ? "green"
                : "red";
        }
    }
};
</script>

<style scoped="true">
.total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
}
.red {
    color: red;
}
.black {
    color: black;
}
.green {
    color: green;
}
</style>
