// lib/getTestimonials.js
import { db } from "../app/utils/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const getTestimonials = async () => {
  const q = query(collection(db, "Testimonials"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
