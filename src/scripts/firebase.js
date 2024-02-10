import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection/* , addDoc */ } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* addDoc(collection(db, "productos"), {
    brand: "Royal",
    name: "Gelatina Frutilla Regular Royal 25g",
    category: "Para preparar",
    servingSize: "3 g. de productoen polvo (1 cuchara de té)",
    imageFront: "https://i.postimg.cc/yNQ7CTsD/image.jpg",
    imageBack: "https://i.postimg.cc/Y9vMrmCb/image.jpg"
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    }); */


const getProducts = () => getDocs(collection(db, "productos"));

export { getProducts };
