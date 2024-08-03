<script>
  import store from "../store/store"
  import { db } from "../firebaseInit.ts"
  import { getDocs, collection } from "firebase/firestore"

  import SideNav from "../components/SideNav.vue"
  import SideMenu from "../components/SideMenu.vue"

  import Notes from "../tabs/Notes.vue"
  import Forum from "../tabs/Forum.vue"
  import Questions from "../tabs/Questions.vue"
  import Profile from "../tabs/Profile.vue"
  import Answer from "../tabs/Answer.vue"

  export default {
    components: {
      SideNav,
      SideMenu,
      Notes,
      Forum,
      Questions,
      Profile,
      Answer,
    },
    data() {
      return {
          store
      }
    },
    mounted() {
      this.getQuestions()
    },
    methods: {
      // This code pulls all the questions from the database once the app is loaded to prevent multiple calls to the database
      getQuestions: async function() {
          let snapshot = await getDocs(collection(db, "questions"))
          snapshot.forEach((doc) => {
              let addedDoc = doc.data()
              addedDoc.id = doc.id
              store.allQuestions.push(addedDoc)
          })
      }
    }
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