<template>
    <TitleBar/>

    <div class="content">
        <div class="section">
            <h3 class="mb-1">Name</h3>
            <input
                id="name"
                type="text"
                v-model="form.name"
                class="has-border-focus has-border-radius"
            >
        </div>

        <ModuleList v-model:form="form"/>

        <div class="section is-centered">
            <button
                @click="generateFiles"
                class="btn is-success has-shadow has-border-focus has-border-radius"
            >
                Generate
            </button>
        </div>

        <FileOutputs v-model:form="form" v-model:files="files"/>
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
                name: 'my-awesome-css',
                modules: modules
            };

            const files: Array<File> = reactive([]);

            const activeModules: Array<string> = reactive([]);

            const generateFiles = async () => {
                // console.log('activeModules:', activeModules.forEach((mod: string) => console.log(mod)));
                // console.log('activeModules:', activeModules);
                const mods = modules.filter((module: Module) => module.isChecked);

                const res = await generate({
                    name: form.name,
                    modules: mods
                });

                files.length = 0;

                // add different file types here
                files.push({
                    name: `${form.name}.css`,
                    contents: res.file,
                    size: formatBytes(encodeURI(res.file).split(/%..|./).length - 1)
                });

                files.push({
                    name: `${form.name}.min.css`,
                    contents: res.minFile,
                    size: formatBytes(encodeURI(res.minFile).split(/%..|./).length - 1)
                });
            };

            const formatBytes = (bytes: number, decimals = 1) => {
                if (bytes === 0) return '0 B';

                const k = 1024;
                const dm = decimals < 0 ? 0 : decimals;
                const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

                const i = Math.floor(Math.log(bytes) / Math.log(k));

                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            };

            return {
                // name,
                // modules,
                form,
                files,
                activeModules,
                generateFiles,
                formatBytes
            };
        }
    });
</script>

<style lang="scss" scoped>
    .content {
        padding: 1rem 2rem;
    }
</style>
