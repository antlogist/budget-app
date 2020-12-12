<template>
    <div class="total-value" :class="totalValueClass">
        Balance: {{ total }}
    </div>
</template>

<script>
export default {
    name: "TotalBalance",
    props: {
        total: {
            type: Number,
            default: 0
        }
    },
    data: () => ({
        totalClass: "black"
    }),
    computed: {
        totalValueClass() {
            return this.total === 0
                ? "black"
                : this.total > 0
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
