<script>
  import store from "../store/store"

  import SideNav from "../components/SideNav.vue"
  import SideMenu from "../components/SideMenu.vue"

  import Notes from "../tabs/Notes.vue"
  import Forum from "../tabs/Forum.vue"
  import Questions from "../tabs/Questions.vue"
  import Profile from "../tabs/Profile.vue"
  import Answer from "../tabs/Answer.vue"
  import ViewQuestion from "../tabs/ViewQuestion.vue"

  export default {
    components: {
      SideNav,
      SideMenu,
      Notes,
      Forum,
      Questions,
      Profile,
      Answer,
      ViewQuestion
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
    <div v-if="store.selected=='answer'"><Answer/></div>
    <div v-if="store.selected=='viewQuestion'"><Answer/></div>
  </div>
  <SideMenu/>
</template>

<style>
  .body {
    padding-top: 8rem;
    padding-left: 16rem;
    padding-right: 16rem;
  }
</style>