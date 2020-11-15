import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOLqaHYnYDFKgEdhY9YSLqdKM8Ed-Had0",
  authDomain: "todomo-e19ff.firebaseapp.com",
  databaseURL: "https://todomo-e19ff.firebaseio.com",
  projectId: "todomo-e19ff",
  storageBucket: "todomo-e19ff.appspot.com",
  messagingSenderId: "684543667350",
  appId: "1:684543667350:web:1293eb56d34de9fe65a6b7",
  measurementId: "G-CY2NTDKYZ4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
