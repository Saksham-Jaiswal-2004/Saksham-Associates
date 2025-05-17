import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export async function getProjectById(id) {
  try {
    const docRef = doc(db, "Projects", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
