<script setup lang="ts">
import { RouterView } from "vue-router";
import {initializeApp} from "firebase/app"

import firebaseConfig from "./firebaseConfig"
initializeApp(firebaseConfig)

import Navbar from "./components/Navbar.vue"

</script>

<template>
  <Navbar/>
  <RouterView/>
</template>

<style scoped>
</style>
