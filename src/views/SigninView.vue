<script>
    import {createUserWithEmailAndPassword} from "firebase/auth"
    import { auth } from "../firebaseInit.ts"
    import router from "../router/index.ts";

    let email, password = "";
    let errorCode;

    export default {
        data () {
            return {
                email,
                password,
                errorCode
            }
        },
        methods: {
            sendData: function(e, p) {
                createUserWithEmailAndPassword(auth, e, p).then((data) => {
                    // console.log(data);
                    router.push("/app");
                }).catch((error) => {
                    // console.log(error)
                    if(error.code == "auth/email-already-in-use") {
                        this.errorCode = "A conta já existe."
                    } else {
                        this.errorCode = "Usuário ou senha inválidos."
                    }
                })
            }
        }
    }
</script>

<template>
    <div class="login fixed top-1/2 left-1/2 border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
        <h1 class="mt-10 mb-20 text-center font-bold text-lg">Cadastrar</h1>
        <label class="w-4/5 mx-auto">E-mail:</label>
        <input type="email" v-model="email" class="w-4/5 h-8 mx-auto mt-1 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
        <label class="w-4/5 mx-auto mt-10">Senha:</label>
        <input type="password" v-model="password" class="w-4/5 h-8 mx-auto mt-1 text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line"/>
        <p class="text-red-500 text-center text-sm mt-10">{{ errorCode }}</p>
        <button @click="sendData(email, password)" class="w-2/5 h-8 mx-auto mt-120 mb-auto text-center border-2 border-stone-200 rounded-full dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line">Enviar</button>
        <a href="/login" class="w-2/5 h-8 mx-auto mb-auto text-center dark:bg-stone-800 dark:text-white text-sm">Já possui conta?</a>
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