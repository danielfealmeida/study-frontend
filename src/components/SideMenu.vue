<script>
    import { auth, db } from "../firebaseInit"
    import { onAuthStateChanged } from "firebase/auth"
    import { addDoc, collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore"

    let tasks = []
    let uncompletedTasks = []
    let completedTasks = []

    const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
            const removeListerner = onAuthStateChanged(auth, (user) => {
            removeListerner();
            resolve(user)
            }, reject)
        })
    }

    let queryTasks;

    export default {
        data() {
            return {
                opened: "tasks",
                uncompletedTasks,
                completedTasks,
                newTask: "",
                active: false,
                timer: 10,
                timeSelected: 5,
                inputed: "",
                styleCount: 0
            }
        },
        created() {
            this.getTasks()
            setInterval(() => {
                if(this.timer > 0) {
                    this.timer--
                } else {
                    this.styleCount++
                }
            }, 1000)
        },
        methods: {
            // This function deletes the current uncompleted and completed tasks, then adds them back from a more recent tasks array
            cycleTasks: function() {
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
            // Gets all tasks that the user has ever made and then goes through them, saving all of their data to the tasks array
            // This works decently well, but it seems to me like making so many API calls for every user may become a problem once the app goes to production
            getTasks: async function() {
                if(await getCurrentUser()) {
                    queryTasks = await getDocs(query(collection(db, "tasks"), where("user", "==", (await getCurrentUser()).uid)))
                    queryTasks.forEach((task) => {
                        let addedTask = task.data()
                        addedTask.fid = task.id
                        tasks.push(addedTask)
                    })
                }
                this.cycleTasks()
            },
            changeCompletion: async function(task) {
                tasks = []
                updateDoc(doc(db, "tasks", task.fid), {completion: !task.completion})
                this.getTasks()
            },
            addTask: async function(content) {
                tasks = []
                addDoc(collection(db, "tasks"), {content, completion:false, id:tasks.length, user: auth.currentUser.uid})
                this.getTasks()
            },
            removeTask: function(task) {
                tasks = tasks.filter(e => e.id !== task.id)
                deleteDoc(doc(db, "tasks", task.fid))
                this.getTasks()
            },
            pad: function(number, size) {
                var s = String(number);
                while (s.length < (size || 2)) {s = "0" + s;}
                return s;
            }
        }
    }
</script>

<template>
    <div class="side fixed right-0 w-60 h-full border-b-2 border-l-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-l-1 dark:border-dark-line align-middle text-center pt-5 text-sm">
        <select class="w-10/12 bg-white dark:bg-stone-800 dark:text-white" v-model="opened">
            <option value="tasks">Tarefas</option>
            <option value="pomodoro">Pomodoro</option>
        </select>
        <div v-if="opened=='tasks'" class="mt-5">
            <input type="text" v-model="newTask" @keypress.enter="addTask(newTask)" class="w-4/5 h-8 mx-auto mt-1 text-center text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
            <button @click="addTask(newTask)" class="w-4/5 h-8 mx-auto mt-1 mb-4 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line text-sm">Adicionar</button>
            <div class="flex flex-col">
                <div class="uncompleted">
                    <div v-for="task in uncompletedTasks" :key="task" class="p-1 w-10/12 mx-auto text-sm flex flex-row">
                        <input type="checkbox" @click="changeCompletion(task)" v-model="task.completion" class="w-5 h-5 appearance-none border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
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
        <div v-if="opened=='pomodoro'" class="mt-5">
            <h1 class="mb-5 mt-1">Temporizador</h1>
            <button class="w-32 h-32 rounded-full border-2 border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-l-1 dark:border-dark-line" :style="timer==0 && styleCount%2==0 && active ? {background: 'rgb(239 68 68)'} : '' " @click="active = !active; timer = timeSelected">{{ active ? (pad(Math.floor(timer/60), 2) + ":" + pad(Math.round(60*(timer/60 - Math.floor(timer/60))), 2)) : "Iniciar" }}</button>
            <h2 class="mt-2">Tempo (em minutos):</h2>
            <div class="w-10/12 mt-2 flex flex-row flex-wrap mx-auto">
                <button class="w-14 h-14 mx-1 my-1 text-sm text-center rou border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line focus:bg-stone-200 dark:focus:bg-dark-line" @click="timeSelected = 600">10</button>
                <button class="w-14 h-14 mx-1 my-1 text-sm text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line focus:bg-stone-200 dark:focus:bg-dark-line" @click="timeSelected = 1200">20</button>
                <button class="w-14 h-14 mx-1 my-1 text-sm text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line focus:bg-stone-200 dark:focus:bg-dark-line" @click="timeSelected = 1800">30</button>
            </div>
            <div>
                <input type="text" class="w-4/5 h-8 mx-auto mt-1 text-center text-sm border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line focus:bg-stone-200 dark:focus:bg-dark-line" v-model="inputed" @change="timeSelected = inputed*60" placeholder="..."/>
            </div>
        </div>
    </div>
</template>

<style>
    .side {
        top: 8vh;
    }
</style>