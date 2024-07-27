import { reactive } from "vue"

let store;

export default store = reactive({
    selected: "notes",
    questions: [],
    allQuestions: []
})