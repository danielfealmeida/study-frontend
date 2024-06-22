<script>
    let tasks = []
    let uncompletedTasks = []
    let completedTasks = []

    tasks.forEach((task) => {
        if(task.completion == true) {
            completedTasks.push(task)
        } else {
            uncompletedTasks.push(task)
        }
    })

    export default {
        data() {
            return {
                opened: "tasks",
                uncompletedTasks,
                completedTasks
            }
        },
        methods: {
            changeCompletion: function(task) {
                task.completion = !task.completion
                this.uncompletedTasks = []
                this.completedTasks = []
                tasks.forEach((task) => {
                    if(task.completion == true) {
                        this.completedTasks.push(task)
                    } else {
                        this.uncompletedTasks.push(task)
                    }
                })
            },
            addTask: function(content) {
                tasks.push({content, completion:false})
                this.uncompletedTasks.push({content, completion:false})
            },
            removeTask: function(task) {
                tasks.splice(tasks.indexOf(task))
                this.uncompletedTasks = []
                this.completedTasks = []
                tasks.forEach((task) => {
                    if(task.completion == true) {
                        this.completedTasks.push(task)
                    } else {
                        this.uncompletedTasks.push(task)
                    }
                })
            }
        }
    }
</script>

<template>
    <div class="side fixed right-0 w-60 h-full border-b-2 border-l-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-l-1 dark:border-dark-line align-middle text-center pt-5">
        <select class="w-10/12 bg-white dark:bg-stone-800 dark:text-white" v-model="opened">
            <option value="tasks">Tarefas</option>
            <option value="pomodoro">Pomodoro</option>
        </select>
        <div v-if="opened=='tasks'" class="mt-5">
            <input type="text" v-model="newTask" @keypress.enter="addTask(newTask)" class="w-4/5 h-8 mx-auto mt-1 text-center text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
            <button @click="addTask(newTask)" class="w-4/5 h-8 mx-auto mt-1 mb-3 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line text-sm">Adicionar</button>
            <div class="flex flex-col">
                <div class="uncompleted">
                    <h2 class="text-left text-sm w-10/12 mx-auto mb-2">Tarefas:</h2>
                    <div v-for="task in uncompletedTasks" :key="task" class="p-1 w-10/12 mx-auto text-sm flex flex-row">
                        <input type="checkbox" @click="changeCompletion(task)" v-model="task.completion" class="w-5 h-5 appearance-none border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line checked:bg-pink-600"/>
                        <p class="text-sm ml-2">{{ task.content }}</p>
                        <button @click="removeTask(task)" class="ml-auto text-red-500">×</button>
                    </div> 
                </div>
                <div class="completed mt-2" v-if="completedTasks[0]">
                    <h2 class="text-left text-sm w-10/12 mx-auto mb-2">Concluídas:</h2>
                    <div v-for="task in completedTasks" :key="task" class="p-1 w-10/12 mx-auto text-sm flex flex-row">
                        <input type="checkbox" @click="changeCompletion(task)" v-model="task.completion" class="w-5 h-5 appearance-none border-2 border-stone-200 rounded-full checked:bg-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line dark:checked:bg-dark-line"/>
                        <p class="text-sm ml-2">{{ task.content }}</p>
                        <button @click="removeTask(task)" class="ml-auto text-red-500">×</button>
                    </div> 
                </div>
            </div>
        </div>
        <div v-if="opened=='pomodoro'" class="mt-5">Pomodoro</div>
    </div>
</template>

<style>
    .side {
        top: 8vh;
    }
</style>