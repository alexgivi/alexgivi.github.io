<template>
    <div class="sudoku-cell">
        {{value}}
        <input type="text" v-model="value" v-if="active">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Cell extends Vue {
        private active: boolean = false;
        private value: number | null = null;
        private isFixed: boolean = false;
        private variantsList: Set<number> = new Set<number>();
        private userSelectedVariants: Set<number> = new Set<number>();

        addVariant(variant: number) {
            this.variantsList.add(variant);
        }

        removeVariant(variant: number) {
            this.variantsList.delete(variant);
        }

        selectVariant(variant: number) {
            this.userSelectedVariants.add(variant);
        }

        unselectVariant(variant: number) {
            this.userSelectedVariants.delete(variant);
        }
    }
</script>

<style scoped>

</style>