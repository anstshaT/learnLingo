import { initializeApp } from "firebase/app";

const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
export const DB_URL = import.meta.env.VITE_DB_URL;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAAGING_SENDERID = import.meta.env.VITE_MESSAGING_SENDERID;
const APP_ID = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAAGING_SENDERID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
