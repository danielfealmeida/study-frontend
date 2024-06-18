<script>
    let email, password = "";

    export default {
        data () {
            return {
                email,
                password
            }
        },
        methods: {
            sendData: function(e, p) {
                console.log(e + " " + p)
            }
        }
    }
</script>

<template>
    <div class="login mx-auto border-2 border-stone-200 rounded-sm dark:bg-stone-800 dark:text-white dark:border-b-1 dark:border-dark-line flex flex-col">
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
        margin-top: 12rem;
    }
</style>