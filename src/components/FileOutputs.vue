<template>
    <div
        v-if="files && files.length > 0"
        class="section"
    >
        <h3 class="mb-1">Output</h3>
        <div
            v-for="file of files"
            :key="file.id"
            class="file-output has-border-radius has-shadow"
        >
            <div>
                <span class="name">{{file.name}}</span>
                <span class="size">{{file.size}}</span>
            </div>

            <a
                :href="'data:text/plain;charset=utf-8,' + encodeURIComponent(file.contents)"
                :download="`${file.name}`"
                class="btn is-success has-shadow has-border-focus has-border-radius"
            >
                Download
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue';

    export default defineComponent({
        name: 'FileOutput',
        props: {
            form: {
                required: true,
                type: Object
            },
            files: {
                required: true,
                type: Array
            }
        },
        setup ({ form, files }) {
            return {
                form: reactive(form),
                files: files
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import '../scss/colors.scss';
    @import '../scss/vars.scss';

    .file-output {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 1rem;

        .name {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .size {
            font-size: 1.25rem;
            margin-left: 1rem;
        }
    }
</style>
