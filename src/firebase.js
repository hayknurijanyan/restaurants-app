import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcxrDiqdr8lMI29rHNmw100SdPHyarqUg",
  authDomain: "restaurants-app-b4e98.firebaseapp.com",
  projectId: "restaurants-app-b4e98",
  storageBucket: "restaurants-app-b4e98.appspot.com",
  messagingSenderId: "525599486331",
  appId: "1:525599486331:web:3e7f4f108d10db173a4dde",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export default firebaseApp;
