// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBn7UTjLdHATwf5L4aUJ9I0rJYvCE-ELkM",
  authDomain: "task-management-13b29.firebaseapp.com",
  projectId: "task-management-13b29",
  storageBucket: "task-management-13b29.appspot.com",
  messagingSenderId: "147267138969",
  appId: "1:147267138969:web:957f92da1851bb19d5cf08"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;