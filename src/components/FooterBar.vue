<template>
    <div class="footer is-flex is-centered">
        <a href="https://github.com/Kovee98/modulo-css">
            <img
                src="../assets/images/github_white.png"
                class="logo"
            />
        </a>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FooterBar',
        setup () {
            return {};
        }
    });
</script>

<style lang="scss" scoped>
    @import '../scss/colors.scss';

    .footer {
        padding: 5rem 0.75rem;
        background: #313131;
        color: #e9e9e9;
        display: flex;
        align-items: center;

        a {
            color: #e9e9e9;
        }
    }

    .logo {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
    }
</style>
