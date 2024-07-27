<script>   
    import store from "../store/store"

    import ViewQuestion from "../components/ViewQuestion.vue"

    let questions = store.allQuestions

    export default {
        data() {
            return {
                questions,
                query: "",
                selectedQuestion: {},
                store
            }
        },
        components: {
            ViewQuestion
        }, 
        methods: {
            startQuestions: function() {
                if(questions.filter((question) => {return question.selected}).length != 0) {
                    store.questions = questions.filter((question) => {return question.selected})
                    store.selected = "answer"
                }
            },
            viewQuestion: function(question) {
                this.selectedQuestion = question
                store.viewing = true
            }
        }
    }
</script>

<template>
    <h1 class="text-lg font-bold mb-5">Questões</h1>
    <input type="text" class="w-4/5 h-8 pl-3 text text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" v-model="query"/>
    <div class="flex flex-row flex-wrap mt-10">
        <div v-for="question in questions.filter((question) => {return question.title.toLowerCase().includes(query.toLowerCase())})" :key="question" class="w-64 h-56 relative px-3 mr-3 mb-3 text-sm border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col cursor-pointer">
            <input type="checkbox" class="w-5 h-5 absolute bottom-1 right-1 appearance-none border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line checked:bg-stone-200 dark:checked:bg-dark-line" v-model="question.selected">
            <div class="flex flex-row mt-3 text-nowrap overflow-x-scroll min-h-7">
                <div v-for="subject in question.subjects" :key="subject" class="text-xs mr-2 py-1 px-2 border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">{{ subject }}</div>
            </div>
            <h1 class="mt-3 mb-3 font-semibold text-wrap truncate" @click="viewQuestion(question)">{{ question.title }}</h1>
        </div>
    </div>
    <div class="questionlist fixed w-40 right-60 border-l-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line pt-3 pl-3">
        <div v-for="question in questions.filter((question) => {return question.selected})" :key="question" class="text-nowrap overflow-x-scroll h-12 m-2">
            <button @click="question.selected = false" class="ml-auto text-red-500">×</button>
            {{question.title}}
        </div> 
        <button class="absolute bottom-5 right-1/2 translate-x-1/2 w-4/5 h-8 text-center text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="startQuestions()">Responder</button>
    </div>
    <ViewQuestion :question="selectedQuestion" v-if="store.viewing"></ViewQuestion>
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