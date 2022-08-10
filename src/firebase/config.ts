import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDj8BZjaxdMIUKSq3ihiFcSRTIByDvCqAg",
    authDomain: "weather-data-86b19.firebaseapp.com",
    projectId: "weather-data-86b19",
    storageBucket: "weather-data-86b19.appspot.com",
    messagingSenderId: "265085235727",
    appId: "1:265085235727:web:6fe195ab84f9429796e97a"
  };

const firebaseApp = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(firebaseApp);

  