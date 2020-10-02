<template>
    <div class="modules">
        <h2 class="h2">Modules</h2>
        <div
            v-for="module in modules"
            :key="module.id"
            class="module"
        >
            <input
                type="checkbox"
                :name="module.name"
                :id="module.name"
                v-model="module.isChecked"
            >
            <label :for="module.name" class="capitalize">
                {{module.name}}
            </label>
            <br>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ModuleList',
        props: {
            modules: Array
        },
        setup ({ modules }) {
            return {
                modules
            };
        }
    });
</script>

<style lang="scss" scoped>
    .modules {
        padding: 1.25rem 0;
    }

    .module {
        padding: 1rem;
        font-size: 1.5rem;

        * {
            cursor: pointer;
        }

        input {
            margin-right: 1rem;
            transform: scale(1.4);
        }
    }
</style>
