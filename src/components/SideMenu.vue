<script>
    export default {
        data() {
            return {
                opened: "tasks"
            }
        },
    }
</script>

<template>
    <div class="side fixed right-0 w-60 h-full border-b-2 border-l-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-l-1 dark:border-dark-line align-middle text-center pt-5">
        <select class="w-10/12 bg-white dark:bg-stone-800 dark:text-white" v-model="opened" @click="console.log(opened)">
            <option value="tasks">Tarefas</option>
            <option value="pomodoro">Pomodoro</option>
        </select>
        <div v-if="opened=='tasks'" class="mt-5">Tarefas</div>
        <div v-if="opened=='pomodoro'" class="mt-5">Pomodoro</div>
    </div>
</template>

<style>
    .side {
        top: 8vh;
    }
</style>