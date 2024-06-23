import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

import firebaseConfig from "./firebaseConfig"
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export  {app, auth, db}