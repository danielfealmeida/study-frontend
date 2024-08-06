<script>

    export default {
        data() {
            return {
                notes: [{title: "Nota 1", content:"Olá"}]
            }
        },
    }
</script>

<template>
    <div>
        <h1 class="text-lg font-bold mb-5">Anotações</h1>
        <div v-for="note in notes" :key="note" class="w-64 h-56 relative px-3 mr-3 mb-3 text-sm border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col cursor-pointer">
            <h1 class="mt-3 mb-1 font-semibold text-wrap truncate">{{ note.title }}</h1>
            <p class="mt-1 text-wrap truncate">{{ note.content }}</p>
        </div>
    </div>
</template>

<style>

</style>