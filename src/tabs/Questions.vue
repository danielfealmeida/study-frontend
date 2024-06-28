<script>
    let questions = [{title: "Questão 1", subjects:["Literatura", "Romantismo", "Século XIX", "Brasil"]},{title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit mi orci, quis iaculis nunc imperdiet quis. Integer fringilla id est rhoncus tincidunt. Proin sed vestibulum dolor, in porttitor tellus. Morbi ac magna et velit porttitor ultrices a in sapien. Fusce iaculis nec tellus scelerisque convallis. Aenean viverra massa in mi aliquet interdum. Ut congue nisi ipsum, vitae tempus mi egestas eget. Cras quis magna vitae ex ultricies dictum at eget augue. Curabitur gravida dignissim ipsum, a iaculis tortor aliquam eget. Pellentesque non vehicula urna, a venenatis eros. Mauris interdum maximus porta. Fusce dictum, nulla et pharetra suscipit, dui ipsum tristique sapien, ac pharetra quam tortor vel lectus. Vestibulum non sem varius, efficitur lacus hendrerit, egestas elit.", subjects:["Química", "Química Orgânica", "Hidrocarbonetos"]}]

    export default {
        data() {
            return {
                questions,
                query: "",
            }
        }
    }
</script>

<template>
    <h1 class="text-lg font-bold mb-5">Questões</h1>
    <input type="text" class="w-4/5 h-8 pl-3 text text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" v-model="query"/>
    <div class="flex flex-row flex-wrap mt-10">
        <div v-for="question in questions.filter((question) => {return question.title.toLowerCase().includes(query.toLowerCase())})" :key="question" class="w-64 h-56 relative px-3 mr-3 mb-3 text-sm border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
            <input type="checkbox" class="w-5 h-5 absolute bottom-1 right-1 appearance-none border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line checked:bg-stone-200 dark:checked:bg-dark-line">
            <div class="flex flex-row mt-3 text-nowrap overflow-x-scroll min-h-7">
                <div v-for="subject in question.subjects" :key="subject" class="text-xs mr-2 py-1 px-2 border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">{{ subject }}</div>
            </div>
            <h1 class="mt-3 mb-3 font-semibold text-wrap truncate">{{ question.title }}</h1>
        </div>
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
</style>