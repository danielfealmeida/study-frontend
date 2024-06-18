<script>
  import { store } from "../store/store"

  import SideNav from "../components/SideNav.vue"
  import SideMenu from "../components/SideMenu.vue"

  export default {
    components: {
      SideNav,
      SideMenu
    },
    data() {
      return {
          store
      }
    },  
  }
</script>

<template>
  <SideNav/>
  <div class="body">
    <div v-if="store.selected=='notes'">Anotações</div>
    <div v-if="store.selected=='forum'">Fórum</div>
    <div v-if="store.selected=='questions'">Questões</div>
    <div v-if="store.selected=='profile'">Perfil</div>
  </div>
  <SideMenu/>
</template>

<style>
  .body {
    padding-top: 9rem;
    padding-left: 16rem;
    padding-right: 20rem;
  }
</style>