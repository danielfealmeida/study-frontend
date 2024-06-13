<script>
import {useDark, useToggle} from "@vueuse/core"

let isDark = useDark();
console.log(isDark)
const toggleDark = useToggle(isDark);

export default {
    props: {
        isDark
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
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><p>Página inicial</p></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><p>Sobre</p></div>
        <div class="h-10 my-auto mx-auto text-center align-middle inline-block content-center"><button @click="changeMode()">Tema</button></div>
    </div>
</template>

<style lang="css">
    .navx {
        height: 8vh;
    }
</style>