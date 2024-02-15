import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAZJ3g9hssC7bGhL-bq-Yh1E6N82nh5lvs",
  authDomain: "naturaldisasterhub.firebaseapp.com",
  projectId: "naturaldisasterhub",
  storageBucket: "naturaldisasterhub.appspot.com",
  messagingSenderId: "197442342162",
  appId: "1:197442342162:web:2b845204aa496a499c77cb",
  measurementId: "G-THC8FC5P9N"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage()

export {auth,db,storage}
export default app