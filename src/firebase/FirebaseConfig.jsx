import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCnt3alm6VdkY-rDrh_YtoxgrLyiajLPvM',
    authDomain: 'mquix-online-clothing-store.firebaseapp.com',
    projectId: 'mquix-online-clothing-store',
    storageBucket: 'mquix-online-clothing-store.appspot.com',
    messagingSenderId: '265576550516',
    appId: '1:265576550516:web:7b3158cb0450cd3a264121',
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCnt3alm6VdkY-rDrh_YtoxgrLyiajLPvM",
//   authDomain: "mquix-online-clothing-store.firebaseapp.com",
//   projectId: "mquix-online-clothing-store",
//   storageBucket: "mquix-online-clothing-store.appspot.com",
//   messagingSenderId: "265576550516",
//   appId: "1:265576550516:web:7b3158cb0450cd3a264121",
//   measurementId: "G-RHE0J2V0DQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
