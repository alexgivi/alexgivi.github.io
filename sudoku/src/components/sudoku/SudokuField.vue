<template>
    <div class="field-root">
        <FieldThirdPart v-for="thirdPart in thirdParts"></FieldThirdPart>
    </div>
</template>

<script lang="ts">
    import FieldThirdPart from "@/components/sudoku/FieldThirdPart.vue";
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        components: {FieldThirdPart},
    })

    export default class SudokuField extends Vue {
        thirdParts: FieldThirdPart[] = [new FieldThirdPart(), new FieldThirdPart()];

        public init() {
            this.thirdParts = [new FieldThirdPart(), new FieldThirdPart(),new FieldThirdPart(), new FieldThirdPart()];
            for (let i = 0; i < 9; i++) {
                let part = new FieldThirdPart();
                part.init();
                this.thirdParts.push(part);
            }
        }

        public getThirdPart(row: number, column: number) {
            if (row < 0 || row > 3) {
                throw new Error('Неверное значение row: ' + row);
            }

            if (column < 0 || column > 3) {
                throw new Error('Неверное значение row: ' + row);
            }

            return this.thirdParts[row * 3 + column];
        }

        public generate() {
            alert('generate from field');
        }
    }
</script>

<style scoped>
</style>