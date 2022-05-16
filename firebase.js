import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANQwcqtrz1yHqYJBZtMBXFleaKa_1_EWM",
  authDomain: "edin-a8a94.firebaseapp.com",
  projectId: "edin-a8a94",
  storageBucket: "edin-a8a94.appspot.com",
  messagingSenderId: "108165522304",
  appId: "1:108165522304:web:72caf55128846e7491d765",
  measurementId: "G-8LL9294SR0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
export default app;