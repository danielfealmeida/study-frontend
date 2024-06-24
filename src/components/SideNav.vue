<script>
    import { store } from "../store/store"

    export default {
        data () {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="nav fixed left-0 bottom-0 w-40 border-r-2 border-stone-200 flex flex-col pt-5 dark:bg-stone-800 dark:text-white dark:border-r-1 dark:border-dark-line text-sm">
        <div class="w-10/12 h-10 my-5 mx-auto text-center align-middle inline-block content-center hover:rounded-lg hover:bg-highlight-gray dark:hover:bg-highlight-dark cursor-pointer" @click="store.selected='notes'"><p>Anotações</p></div>
        <div class="w-10/12 h-10 my-5 mx-auto text-center align-middle inline-block content-center hover:rounded-lg hover:bg-highlight-gray dark:hover:bg-highlight-dark cursor-pointer" @click="store.selected='forum'"><p>Fórum</p></div>
        <div class="w-10/12 h-10 my-5 mx-auto text-center align-middle inline-block content-center hover:rounded-lg hover:bg-highlight-gray dark:hover:bg-highlight-dark cursor-pointer" @click="store.selected='questions'"><p>Questões</p></div>
        <div class="w-10/12 h-10 my-5 mx-auto text-center align-middle inline-block content-center hover:rounded-lg hover:bg-highlight-gray dark:hover:bg-highlight-dark cursor-pointer" @click="store.selected='profile'"><p>Perfil</p></div>
    </div>
</template>

<style lang="css">
    .nav {
        height: 92vh;
    }
</style>