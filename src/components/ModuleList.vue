<template>
    <div class="section">
        <h3 class="mb-1">Modules</h3>

        <div class="modules">
            <label
                v-for="module in form.modules"
                :key="module.id"
                class="module has-shadow has-border-radius capitalize"
                :class="{'is-focused' : module.isChecked}"
                :for="module.name"
            >
                <p class="mb-1">{{module.name}}</p>
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
