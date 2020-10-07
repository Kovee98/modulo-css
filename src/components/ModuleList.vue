<template>
    <div class="section">
        <h3 class="mb-1">
            Modules
            <span class="is-light ml-1">(Select some modules)</span>
        </h3>

        <div class="modules">
            <label
                v-for="module in form.modules"
                :key="module.id"
                class="module has-shadow has-border-radius"
                :class="{'is-focused' : module.isChecked}"
                :for="module.name"
            >
                <p class="mb-1 capitalize">{{module.name}}</p>
                <p class="is-light">{{module.desc}}</p>
                <input
                    type="checkbox"
                    :id="module.name"
                    v-model="module.isChecked"
                >
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive } from 'vue';

    export default defineComponent({
        name: 'ModuleList',
        props: {
            form: {
                required: true,
                type: Object
            }
        },
        setup ({ form }) {
            return {
                form: reactive(form)
            };
        }
    });
</script>

<style lang="scss" scoped>
    .modules {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;

        .module {
            padding: 1rem;
            margin-right: 1rem;
            margin-top: 2rem;
            font-size: 1.5rem;
            width: 12rem;
            height: 12rem;
            cursor: pointer;

            input {
                display: none;
            }
        }
    }
</style>
