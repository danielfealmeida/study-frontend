<script>
    import store from "../store/store.ts"
    import { db, auth } from "../firebaseInit"
    import { collection, query, where, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"

    let currentUser

    export default {
        data() {
            return {
                store,
                comments: [],
                currentUser,
                newComment: ""
            }
        },
        created() {
            this.getComments()
            this.currentUser = auth.currentUser
        },
        methods: {
            getComments: async function() {
                let queryComments = await getDocs(query(collection(db, "comments"), where("qid", "==", this.question.id)))
                queryComments.forEach(async (comment) => {
                    let addedComment = comment.data()
                    addedComment.fid = comment.id
                    let queryUsers = await getDocs(query(collection(db, "users"), where("uid", "==", comment.data().uid)))
                    queryUsers.forEach((user) => {
                        addedComment.user = user.data()
                    })
                    this.comments.push(addedComment)
                })
            },
            addComment: function() {
                let addedComment = {qid: this.question.id, uid: this.currentUser.uid, content: this.newComment}
                addDoc(collection(db, "comments"), addedComment).then((result) => {
                    addedComment.fid = result.id
                })
                addedComment.user = this.currentUser
                this.comments.unshift(addedComment)
                this.newComment = ""
            },
            deleteComment: function(comment) {
                this.comments = this.comments.filter(e => e.fid !== comment.fid)
                deleteDoc(doc(db, "comments", comment.fid))
            }
        },
        props: ["question"]
    }
</script>

<template>
    <div>
        <div class="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-10"></div>
        <div class="tabView fixed z-20 overflow-scroll bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 p-10 w-6/12 border-2 rounded-md border-stone-200 rounded-sm bg-white dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
            <h1 class="text-lg font-bold mb-5">{{ question.title }}</h1>
            <img v-for="image in question.images" :src="image" :key="image" class="mb-5 max-w-md mx-auto">
            <button class="text-md text-left p-3 mb-5 cursor-pointer w-auto border-2 rounded-lg border-stone-200 rounded-sm dark:text-white dark:border-b-1 dark:border-dark-line" v-for="answer in question.answers" :key="answer">
                {{ answer.id.toUpperCase() }} - {{ answer.content }}
            </button>
            <div>
                <hr class="border-stone-200 dark:border-dark-line my-5">
                <h1 class="text-sm font-bold my-5">Comentários:</h1>
                <div class="flex flex-row">
                    <input class="min-h-10 w-full p-3 mb-5 border-2 rounded-md border-stone-200 rounded-sm bg-white dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" placeholder="Digite aqui o seu comentário" @keypress.enter="addComment()" v-model="newComment"/>
                    <button @click="addComment()" class="min-h-10 w-20 mx-1 p-3 mb-5 border-2 rounded-md border-stone-200 rounded-sm bg-white dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">Enviar</button>
                </div>
                <div class="relative min-h-20 p-3 mb-5 border-2 rounded-md border-stone-200 rounded-sm bg-white dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" v-for="comment in comments" :key="comment">
                    <h1 class="font-bold mb-2">{{ comment.user.email }}</h1>
                    <p>{{ comment.content }}</p>
                    <button v-if="comment.uid == currentUser.uid" class="absolute top-1 right-2 text-red-500 text-md" @click="deleteComment(comment)">×</button>
                </div>
                <hr class="border-stone-200 dark:border-dark-line my-5">
            </div>
            <button class="w-1/5 mx-auto mt-auto p-1 border-2 rounded-full border-stone-200 dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line" @click="store.viewing = false">Fechar</button>
        </div>
    </div>
</template>

<style>
    .tabView {
        height: 34rem;
    }
</style>