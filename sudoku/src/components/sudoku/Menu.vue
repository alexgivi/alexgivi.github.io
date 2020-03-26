<template>
    <div>
        <button v-on:click="generate">Сгенерировать</button>
        <button v-on:click="initField">Init</button>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Menu extends Vue {
        generate() {
            this.$parent.field.generate();
        }
        initField() {
            this.$parent.field.init();
        }
    }
</script>

<style scoped>

</style>