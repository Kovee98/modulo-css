<template>
    <div v-if="files && files.length > 0">
        <div
            v-for="file of files"
            :key="file.id"
            class="file-output"
        >
            <span>{{file.name}}</span>
            <a
                :href="'data:text/plain;charset=utf-8,' + encodeURIComponent(file.contents)"
                :download="`${file.name}`"
                class="btn is-success"
            >
                Download
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FileOutput',
        props: {
            files: Array
        },
        setup ({ files }) {
            return {
                files
            };
        }
    });
</script>

<style lang="scss" scoped>
    .file-output {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-top: 1rem;
        width: 90%;
        border: 1px solid black;
        padding: 1rem;
        border-radius: 5px;
    }
</style>
