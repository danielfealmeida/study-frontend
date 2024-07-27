<script>
    import store from "../store/store.ts"

    export default {
        data() {
            return {
                store
            }
        },
        props: ["question"]
    }
</script>

<template>
    <div>
        <div class="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-10"></div>
        <div class="tabView fixed z-20 overflow-scroll bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 p-10 w-6/12 border-2 rounded-md border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
        <h1 class="text-lg font-bold mb-5">{{ question.title }}</h1>
        <img v-for="image in question.images" :src="image" :key="image" class="mb-5 max-w-xl mx-auto">
        <button class="text-md text-left p-3 mb-5 cursor-pointer w-11/12 border-2 rounded-lg border-stone-200 rounded-sm dark:text-white dark:border-b-1 dark:border-dark-line" v-for="answer in question.answers" :key="answer">
            {{ answer.id.toUpperCase() }} - {{ answer.content }}
        </button>
        <button class="w-1/5 mx-auto mt-auto p-1 border-2 rounded-full border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="store.viewing = false">Fechar</button>
    </div>
    </div>
</template>

<style>
    .tabView {
        height: 34rem;
    }
</style>