/**
 * Firebase Dynamic Cloud Sync Adapter
 * 
 * To activate live Firebase Cloud Firestore in the future:
 * 1. Run: `npm install firebase`
 * 2. Set `IS_FIREBASE_ENABLED = true`
 * 3. Fill in your Firebase Console credentials below
 */

export const IS_FIREBASE_ENABLED = false;

export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "yukti-software.firebaseapp.com",
  projectId: "yukti-software",
  storageBucket: "yukti-software.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

let db = null;

export const getFirebaseDB = async () => {
  if (!IS_FIREBASE_ENABLED) return null;
  // Live connection placeholder ready for when firebase npm is added
  return db;
};
