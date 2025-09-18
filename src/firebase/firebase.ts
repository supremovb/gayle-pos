import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyBWGgzKPZvG90EWGL5fE7q0bi2J6Ba_ssM",
  authDomain: "gayles-essentials.firebaseapp.com",
  projectId: "gayles-essentials",
  storageBucket: "gayles-essentials.firebasestorage.app",
  messagingSenderId: "718141570462",
  appId: "1:718141570462:web:e07079b3f5d01472176a8f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Enable Firestore offline persistence
enableIndexedDbPersistence(db).catch(() => {});

// Helper for online status
export const isOnline = () => window.navigator.onLine;  