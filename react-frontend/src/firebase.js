import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbQTs6P4BbkTgfcSGMysaaICYcA2k8OhA",
  authDomain: "fileuploading-1e34e.firebaseapp.com",
  projectId: "fileuploading-1e34e",
  storageBucket: "fileuploading-1e34e.appspot.com",
  messagingSenderId: "816681244404",
  appId: "1:816681244404:web:1bfbce7aeb36b48eed30a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
