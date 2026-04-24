import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyClzM9jAjC7e6yIXpPQQQUJvCH5sC6pDJk",
  authDomain: "ecoquest-30da9.firebaseapp.com",
  projectId: "ecoquest-30da9",
  storageBucket: "ecoquest-30da9.firebasestorage.app",
  messagingSenderId: "389253555385",
  appId: "1:389253555385:web:c103b3b11f265088f72768"
};

const app = initializeApp(firebaseConfig);

// Persists login session across app restarts
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db      = getFirestore(app);
export const storage = getStorage(app);
export default app;