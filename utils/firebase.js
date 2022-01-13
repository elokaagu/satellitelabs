import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyAM0eAzbXz6D8D3MVRaNl7kJMkTAag68sY",
  authDomain: "satellitelabs-3fa6d.firebaseapp.com",
  projectId: "satellitelabs-3fa6d",
  storageBucket: "satellitelabs-3fa6d.appspot.com",
  messagingSenderId: "349659006451",
  appId: "1:349659006451:web:7ddc26fe54ec561cf87e86",
});

const firestore = getFirestore();

export { firestore };
