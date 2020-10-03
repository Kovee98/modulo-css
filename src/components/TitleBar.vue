<template>
    <div class="title is-flex">
        <img
            src="/android-chrome-512x512.png"
            class="logo"
        />
        <h2>modulo.css</h2>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'TitleBar',
        setup () {
            return {};
        }
    });
</script>

<style lang="scss" scoped>
    .title {
        padding: 1.25rem;
        background: #313131;
        color: #e9e9e9;
    }

    .logo {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
    }
</style>
