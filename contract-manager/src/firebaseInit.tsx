// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAjsj-E6YBrwaTG9RPhOCFB6CDeqx8RAcY",
    authDomain: "contractmanager-999ce.firebaseapp.com",
    projectId: "contractmanager-999ce",
    storageBucket: "contractmanager-999ce.appspot.com",
    messagingSenderId: "294361931251",
    appId: "1:294361931251:web:64a49f510c4ca8ba238686",
    measurementId: "G-Q8F0Q2JVMD",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return app;
};

export default firebaseInit