import { db } from "../config/firebase.js";
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const collectionName = "products";

export const productModel = {
  findAll: async () => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  findById: async (id) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  },
  create: async (productData) => {
    const docRef = await addDoc(collection(db, collectionName), productData);
    return { id: docRef.id, ...productData };
  },
  delete: async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return id;
  },
  update: async (id, productData) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, productData);
    return { id, ...productData };
  }
};
