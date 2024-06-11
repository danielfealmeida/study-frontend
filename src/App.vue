<script setup lang="ts">
import { RouterView } from "vue-router";
import { collection, addDoc } from "firebase/firestore";
import firebaseInit from "./firebaseInit";

import Navbar from "./components/Navbar.vue"

// addDoc(collection(firebaseInit.firestore, "test"), {id: 1, name: "002", isReal:true})
</script>

<template>
  <Navbar/>
  <RouterView/>
</template>

<style scoped>
</style>
