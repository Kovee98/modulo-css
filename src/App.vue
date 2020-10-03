<template>
    <TitleBar/>

    <div class="content">
        <h2 class="h2">Name</h2>
        <input id="name" type="text" v-model="form.name">

        <ModuleList v-model:modules="form.modules"/>

        <button
            @click="generateFiles"
            class="btn is-success"
        >
            Generate
        </button>

        <FileOutputs v-model:files="files"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue';
    import TitleBar from './components/TitleBar.vue';
    import ModuleList from './components/ModuleList.vue';
    import FileOutputs from './components/FileOutputs.vue';
    import modules from './modules/modules.js';
    import generate from './js/generator';
    import { Form, Module, File } from './types/index';

    export default defineComponent({
        name: 'App',
        components: {
            TitleBar,
            ModuleList,
            FileOutputs
        },
        setup () {
            const form: Form = {
                name: '',
                modules: modules
            };

            const files: Array<File> = reactive([]);

            const generateFiles = async () => {
                const mods = form.modules.filter((module: Module) => module.isChecked);

                const res = await generate({
                    ...form,
                    modules: mods
                });

                // add different file types here
                files.push({
                    name: `${form.name}.css`,
                    contents: res.file
                });
                files.push({
                    name: `${form.name}.min.css`,
                    contents: res.minFile
                });
            };

            return {
                form,
                files,
                generateFiles
            };
        }
    });
</script>

<style lang="scss" scoped>
    .content {
        padding: 1rem 2rem;
    }
</style>
