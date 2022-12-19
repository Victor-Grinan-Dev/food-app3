import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAOVYQ4rMKcZu600mL-95s0GDLV5YbWcxI",
  authDomain: "foodapp-c71e2.firebaseapp.com",
  projectId: "foodapp-c71e2",
  storageBucket: "foodapp-c71e2.appspot.com",
  messagingSenderId: "751919623297",
  appId: "1:751919623297:web:f3e168559fec07b7227180"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}