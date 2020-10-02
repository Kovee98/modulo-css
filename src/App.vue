<template>
    <TitleBar/>

    <div class="content">
        <input type="text" v-model="form.name">

        <ModuleList v-model:modules="form.modules"/>

        <button
            @click="download"
            class="btn is-success"
        >
            Download
        </button>
    </div>
</template>

<script lang="ts">
    import 
    import { defineComponent } from 'vue';
    import TitleBar from './components/TitleBar.vue';
    import ModuleList from './components/ModuleList.vue';
    import { modules } from './modules/modules.json';
    import generate from './js/generator';

    export default defineComponent({
        name: 'App',
        components: {
            TitleBar,
            ModuleList
        },
        setup () {
            const form: GenForm = {
                name: '',
                modules: modules
            };

            const state = {
                form: form
            };

            function download () {
                const form = state.form;
                console.log('form:', form);

                form.modules = form.modules.filter((module : Module) => module.isChecked);

                generate(form);
            }

            return {
                ...state,
                download
            };
        }
    });
</script>

<style lang="scss" scoped>
    .content {
        padding: 1rem 2rem;
    }
</style>
