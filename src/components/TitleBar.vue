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
        padding: 0.75rem;
        background: #313131;
        color: #e9e9e9;
        display: flex;
        align-items: center;
    }

    .logo {
        width: 35px;
        height: 35px;
        margin: 0 1rem;
    }
</style>
