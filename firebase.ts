import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4vw5FTfD_HwGaoW6GYGbcR5PLFJ-qffw",
  authDomain: "nimbus-22b03.firebaseapp.com",
  projectId: "nimbus-22b03",
  storageBucket: "nimbus-22b03.firebasestorage.app",
  messagingSenderId: "1057959704424",
  appId: "1:1057959704424:web:eef6e31fa8230070d748dd",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
