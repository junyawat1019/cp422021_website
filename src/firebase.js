import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions"
import { connectStorageEmulator, getStorage } from "firebase/storage"

//------------------------//
const firebaseConfig = {
  apiKey: "AIzaSyDvM6YTh5tItx_cvH8ZweHnxbL9tacFR_k",
  authDomain: "cp422021-6733805371.firebaseapp.com",
  databaseURL: "https://cp422021-6733805371-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cp422021-6733805371",
  storageBucket: "cp422021-6733805371.firebasestorage.app",
  messagingSenderId: "1061418761223",
  appId: "1:1061418761223:web:1e07b5df763d534ebe7ea2",
  measurementId: "G-C8BJXTW9WV"
};
//------------------------//

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const storage = getStorage(app)

//const functions = getFunctions(app,"asia-southeast1")

const functions = getFunctions(app)

if (true) {
  connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true })
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectFunctionsEmulator(functions, "localhost", 5001)
  connectStorageEmulator(storage, "localhost", 9199)
}

const call = async(functionName, params) => {
  try {
    let callableFunctions = httpsCallable(functions, functionName)
    let res = await callableFunctions(params)
    if (res.data.success) {
      return res.data
    } else if(res.data.success === false) {
      console.log(res.data.reason)
    }
    
  } catch (err) {
    console.log(err)
  }
}

export { app, auth, call, db, functions, storage }
