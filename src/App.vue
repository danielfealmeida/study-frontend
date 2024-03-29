<script setup lang="ts">
import { RouterView } from "vue-router";
import { collection, addDoc } from "firebase/firestore";
import firebaseInit from "./firebaseInit";

// addDoc(collection(firebaseInit.firestore, "test"), {id: 1, name: "002", isReal:true})
</script>

<template>
  <RouterView/>
</template>

<style scoped>
</style>
