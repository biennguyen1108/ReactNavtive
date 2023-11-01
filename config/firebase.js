import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBKNZNMgwhCpWWevRfw4k-uwQFwzuoAyaA",
  authDomain: "fooddelivery-aa8e7.firebaseapp.com",
  projectId: "fooddelivery-aa8e7",
  storageBucket: "fooddelivery-aa8e7.appspot.com",
  messagingSenderId: "66837198137",
  appId: "1:66837198137:web:180f60c17e357353a4a4e8",
  measurementId: "G-ZTQ02J0M34"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
