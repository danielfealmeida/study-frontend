<script>
  import { store } from "../store/store"

  import SideNav from "../components/SideNav.vue"
  import SideMenu from "../components/SideMenu.vue"

  import Notes from "../tabs/Notes.vue"
  import Forum from "../tabs/Forum.vue"
  import Questions from "../tabs/Questions.vue"
  import Profile from "../tabs/Profile.vue"

  export default {
    components: {
      SideNav,
      SideMenu,
      Notes,
      Forum,
      Questions,
      Profile
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
    <div v-if="store.selected=='notes'"><Notes/></div>
    <div v-if="store.selected=='forum'"><Forum/></div>
    <div v-if="store.selected=='questions'"><Questions/></div>
    <div v-if="store.selected=='profile'"><Profile/></div>
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