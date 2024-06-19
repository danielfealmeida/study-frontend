<script setup lang="ts">
import { RouterView } from "vue-router";
import { app } from "./firebaseInit.ts"

import Navbar from "./components/Navbar.vue"

</script>

<template>
  <Navbar/>
  <RouterView/>
</template>

<style scoped>
</style>
