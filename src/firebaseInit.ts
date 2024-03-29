import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./firebaseConfig"

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default {app, firestore}