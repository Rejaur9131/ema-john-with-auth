// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBNOWBJPlDwUb3OjRoFoPVyMrMSh6mI3I',
  authDomain: 'ema-jhon-simple-b5.firebaseapp.com',
  projectId: 'ema-jhon-simple-b5',
  storageBucket: 'ema-jhon-simple-b5.appspot.com',
  messagingSenderId: '303032012374',
  appId: '1:303032012374:web:f6bcbbd20d4aef248375f7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
