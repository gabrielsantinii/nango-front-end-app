import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseConfig } from "../interfaces";

class FirebaseService {
    private readonly config: FirebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY as string,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
        databaseURL: process.env.REACT_APP_DATABASE_URL as string,
        projectId: process.env.REACT_APP_PROJECT_ID as string,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET as string,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID as string,
        appId: process.env.REACT_APP_APP_ID as string,
    };

    private firebaseApp: FirebaseApp;

    constructor() {
        this.firebaseApp = initializeApp(this.config);
        console.log("Firebase initialized");
    }

    getAuth() {
        return getAuth(this.firebaseApp);
    }
}

export default new FirebaseService();
