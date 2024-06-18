<script>
    import {useDark, useToggle} from "@vueuse/core"

    let isDark = useDark();
    const toggleDark = useToggle(isDark);

    export default {
        data () {
            return {
                isDark
            }
        },
        methods: {
            changeMode: function() {
                toggleDark();
            }
        }
    }
</script>

<template>
    <div class="navx fixed left-0 top-0 w-screen border-b-2 border-stone-200 flex flex-row dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">
        <a href="/"><img src="../assets/small-logo.png" alt="saiba-mais-logo" class="logo my-auto mx-20 translate-x--1/2 translate-y--1/2"/></a>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><a href="/">Página inicial</a></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><a href="/app">Aplicativo</a></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><a href="/login">Entrar</a></div>
        <div class="h-10 my-auto mx-20 text-center align-middle inline-block content-center"><button @click="changeMode()">{{ isDark ? "☀️" : "🌙" }}</button></div>
    </div>
</template>

<style lang="css">
    .navx {
        height: 8vh;
    }
    .logo {
        height: 7vh;
    }
</style>