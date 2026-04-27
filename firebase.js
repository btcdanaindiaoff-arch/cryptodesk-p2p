// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyANZUJLLFZ5AZW-sA43o1pyiXRFtGSyM5U",
  authDomain: "cryptodesk-7f3a7.firebaseapp.com",
  projectId: "cryptodesk-7f3a7",
  storageBucket: "cryptodesk-7f3a7.appspot.com"
  messagingSenderId: "82040774359",
  appId: "1:82040774359:web:f2d0366e0cd6ace1931a92"
};

// Initialize
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
