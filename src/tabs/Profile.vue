<script>
    import { auth } from "../firebaseInit.ts"
    import router from "../router/index.ts"
    import {store} from "../store/store.ts"

    let user;

    export default {
        data () {
            return {
                user
            }
        },
        beforeCreate () {
            user = auth.currentUser
        },
        methods: {
            signOutUser: () => {
                auth.signOut(user)
                store.isLogged = false
                router.push("/")
            }
        }
    }
</script>

<template>
    <div>
        <h1 class="text-lg font-bold mb-10">Perfil</h1>
        <p class="mb-5">Email: {{ user.email }}</p>
        <p class="mb-10">UID: {{ user.uid }}</p>
        <button @click="signOutUser()" class="w-2/5 h-8 mx-auto mb-auto text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">Sair</button>
    </div>
</template>

<style>
    
</style>