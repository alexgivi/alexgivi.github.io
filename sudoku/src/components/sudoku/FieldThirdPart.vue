<template>
    <div>
        <Cell v-for="cell in cells"></Cell>
    </div>
</template>

<script lang="ts">
    import Cell from "./Cell.vue";
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        components: {Cell}
    })
    export default class FieldThirdPart extends Vue {
        private cells: Cell[] = [];

        public init() {
            this.cells = [];
            for (let i = 0; i < 9; ++i) {
                this.cells.push(new Cell());
            }
        }

        public getCell(row: number, column: number) {
            if (row < 0 || row > 3) {
                throw new Error('Неверное значение row: ' + row);
            }

            if (column < 0 || column > 3) {
                throw new Error('Неверное значение row: ' + row);
            }

            return this.cells[row * 3 + column];
        }
    }
</script>

<style scoped>

</style>