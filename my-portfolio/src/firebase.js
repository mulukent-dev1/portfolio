import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKQH2c8nniI7vZp-cZzwxc0d2s6OzDxD4",
    authDomain: "portfolio-2a97c.firebaseapp.com",
    projectId: "portfolio-2a97c",
    storageBucket: "portfolio-2a97c.firebasestorage.app",
    messagingSenderId: "661241354847",
    appId: "1:661241354847:web:cc22d67daad5a36b3ed9ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };