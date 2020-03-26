<template>
    <div>
        <SudokuField></SudokuField>
        <Menu></Menu>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import SudokuField from "@/components/sudoku/SudokuField.vue";
    import Menu from "@/components/sudoku/Menu.vue";

    @Component({
        components: {SudokuField, Menu}
    })

    export default class Sudoku extends Vue {
        field: SudokuField = new SudokuField();
        menu: Menu = new Menu();
    }
</script>

<style scoped>

</style>