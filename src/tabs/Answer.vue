<script>
    import store from "../store/store.ts"

    export default {
        data() {
            return {
                selectedQuestions: store.questions,
                currentQuestion: 0,
                isRunning: true,
                correctAnswers: 0,
                clicked: false
            }
        },
        mounted() {
            this.selectedQuestions = store.questions
            for (let i = this.selectedQuestions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.selectedQuestions[i], this.selectedQuestions[j]] = [this.selectedQuestions[j], this.selectedQuestions[i]];
            }
        },
        methods: {
            checkNext: function() {
                if(this.selectedQuestions.length==this.currentQuestion+1) {
                    this.isRunning = false
                } else {
                    this.currentQuestion++
                    this.clicked = false;
                }
            },
            checkRight: function(answer) {
                if(answer.correct && !this.clicked) {
                    this.correctAnswers++
                }
                this.clicked = true;
                console.log(this.clicked, this. correctAnswers)
                console.log(answer.correct && this.clicked)
            },
            returnHome() {
                store.selected='questions'
            }
        }
    }
</script>

<template>
    <div class="tab p-10 w-11/12 border-2 rounded-md border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col" v-if="isRunning">
        <h1 class="text-lg font-bold mb-5">{{ selectedQuestions[currentQuestion].title }}</h1>
        <button class="text-md text-left p-3 mb-5 cursor-pointer w-11/12 border-2 rounded-lg border-stone-200 rounded-sm dark:text-white dark:border-b-1 dark:border-dark-line" :class="{'bg-green-500':answer.correct && clicked, 'bg-red-500':!answer.correct && clicked}" v-for="answer in selectedQuestions[currentQuestion].answers" :key="answer" @click="checkRight(answer)">
            {{ answer.id.toUpperCase() }} - {{ answer.content }}
        </button>
        <button class="w-1/5 mx-auto mt-auto p-1 border-2 rounded-full border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="checkNext()">Próxima</button>
    </div>
    <div class="tab p-10 w-11/12 border-2 rounded-md border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col" v-if="!isRunning">
        <h1 class="text-lg font-semibold mb-5 mx-auto mt-auto">Você terminou todas as questões!</h1>
        <h2 class="text-lg mb-5 mx-auto mb-auto">{{ this.correctAnswers }}/{{ selectedQuestions.length }}</h2>
        <button class="w-1/5 mx-auto mt-auto p-1 border-2 rounded-full border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="returnHome()">Voltar</button>
    </div>
</template>

<style>
    .tab {
        height: 34rem;
    }
</style>