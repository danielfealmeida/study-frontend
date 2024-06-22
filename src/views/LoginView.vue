<script>
    import {signInWithEmailAndPassword} from "firebase/auth"
    import { auth } from "../firebaseInit.ts"
    import router from "../router/index.ts";

    let email, password = "";
    let errorCode = "";

    export default {
        data () {
            return {
                email,
                password
            }
        },
        methods: {
            sendData: function(e, p) {
                signInWithEmailAndPassword(auth, e, p).then((data) => {
                    // console.log(data);
                    router.push("/app");
                }).catch((error) => {
                    console.log(error)
                    errorCode = "Usuário ou senha inválidos."
                    alert(errorCode)
                })
            }
        }
    }
</script>

<template>
    <div class="login fixed top-1/2 left-1/2 border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
        <h1 class="mt-10 mb-20 text-center font-bold text-lg">Entrar</h1>
        <label class="w-4/5 mx-auto">E-mail:</label>
        <input type="email" v-model="email" class="w-4/5 h-8 mx-auto mt-1 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
        <label class="w-4/5 mx-auto mt-10">Senha:</label>
        <input type="password" v-model="password" class="w-4/5 h-8 mx-auto mt-1 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
        <button @click="sendData(email, password)" class="w-2/5 h-8 mx-auto mt-20 mb-auto text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">Entrar</button>
        <a href="/signin" class="w-2/5 h-8 mx-auto mb-auto text-center dark:bg-stone-800 dark:text-white text-sm">Criar conta</a>
    </div>
</template>

<style>
    .login {
        width: 28rem;
        height: 34rem;
        transform: translate(-50%, -50%);
        margin: 0 !important;
    }
</style>