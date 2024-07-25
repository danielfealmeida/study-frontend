<script>   
    import store from "../store/store"

    let questions = [{title: "Questão 1", subjects:["Literatura", "Romantismo", "Século XIX", "Brasil"], selected: false, answers:[{id:"a", content:"América colonial"},{id:"b", content:"América espanhola"}]}]

    export default {
        data() {
            return {
                questions,
                query: "",
            }
        },
        methods: {
            startQuestions: function() {
                store.questions = questions.filter((question) => {return question.selected})
                store.selected = "answer"
            }
        }
    }
</script>

<template>
    <h1 class="text-lg font-bold mb-5">Questões</h1>
    <input type="text" class="w-4/5 h-8 pl-3 text text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" v-model="query"/>
    <div class="flex flex-row flex-wrap mt-10">
        <div v-for="question in questions.filter((question) => {return question.title.toLowerCase().includes(query.toLowerCase())})" :key="question" class="w-64 h-56 relative px-3 mr-3 mb-3 text-sm border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
            <input type="checkbox" class="w-5 h-5 absolute bottom-1 right-1 appearance-none border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line checked:bg-stone-200 dark:checked:bg-dark-line" v-model="question.selected">
            <div class="flex flex-row mt-3 text-nowrap overflow-x-scroll min-h-7">
                <div v-for="subject in question.subjects" :key="subject" class="text-xs mr-2 py-1 px-2 border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">{{ subject }}</div>
            </div>
            <h1 class="mt-3 mb-3 font-semibold text-wrap truncate">{{ question.title }}</h1>
        </div>
    </div>
    <div class="questionlist absolute w-40 right-60 border-l-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line pt-3 pl-3">
        <div v-for="question in questions.filter((question) => {return question.selected})" :key="question" class="text-nowrap overflow-x-scroll h-12 m-2">
            <button @click="question.selected = false" class="ml-auto text-red-500">×</button>
            {{question.title}}
        </div> 
        <button class="absolute bottom-5 right-1/2 translate-x-1/2 w-4/5 h-8 text-center text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="startQuestions()">Responder</button>
    </div>
</template>

<style>
    div::-webkit-scrollbar {
        display: none;   
    }
    div {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .questionlist {
        height: 92vh;
        top: 8vh;
    }
</style>