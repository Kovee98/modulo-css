<template>
    <TitleBar/>

    <div class="content">
        <h2 class="mb-1">Create your CSS framework</h2>

        <div class="section">
            <h3 class="mb-1">
                Name
                <span class="is-light ml-1">(Choose a name)</span>
            </h3>

            <input
                id="name"
                type="text"
                v-model="form.name"
                class="has-border-focus has-border-radius mt-1"
            >
        </div>

        <ModuleList v-model:form="form"/>

        <FileOutputs v-model:form="form" v-model:files="files"/>
    </div>

    <FooterBar/>
</template>

<script lang="ts">
    import { defineComponent, reactive, watch } from 'vue';
    import TitleBar from './components/TitleBar.vue';
    import ModuleList from './components/ModuleList.vue';
    import FileOutputs from './components/FileOutputs.vue';
    import FooterBar from './components/FooterBar.vue';
    import modules from './modules.js';
    import generate from './js/generator';
    import { Form, Module, File } from './types/index';

    export default defineComponent({
        name: 'App',
        components: {
            TitleBar,
            ModuleList,
            FileOutputs,
            FooterBar
        },
        setup () {
            const form: Form = reactive({
                name: 'my-awesome-css',
                modules: modules
            });

            const files: Array<File> = reactive([]);

            const generateFiles = async () => {
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

            // automatically re-generate files on form update
            watch(form, generateFiles);

            const formatBytes = (bytes: number, decimals = 1) => {
                if (bytes === 0) return '0 B';

                const k = 1024;
                const dm = decimals < 0 ? 0 : decimals;
                const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

                const i = Math.floor(Math.log(bytes) / Math.log(k));

                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            };

            generateFiles();

            return {
                form,
                files,
                generateFiles,
                formatBytes
            };
        }
    });
</script>

<style lang="scss" scoped>
    .content {
        max-width: 768px;
        margin: 40px auto;
        padding: 0 24px;
    }
</style>
