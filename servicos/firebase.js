// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7AWffKDmSnHgxvd1uS6j6ANu_ATleDqg",
  authDomain: "listadetarefas-64484.firebaseapp.com",
  projectId: "listadetarefas-64484",
  storageBucket: "listadetarefas-64484.appspot.com",
  messagingSenderId: "250323644225",
  appId: "1:250323644225:web:c9fb1e267d8936f0863bc0",
  measurementId: "G-GTVWBG8WYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);