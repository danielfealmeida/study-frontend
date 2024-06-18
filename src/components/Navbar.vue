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
        <div class="w-10 h-10 bg-blue-500 my-auto mr-auto ml-20"></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><a href="/">Página inicial</a></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><a href="/app">Aplicativo</a></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><button @click="changeMode()">{{ isDark ? "🌙" : "☀️" }}</button></div>
    </div>
</template>

<style lang="css">
    .navx {
        height: 8vh;
    }
</style>