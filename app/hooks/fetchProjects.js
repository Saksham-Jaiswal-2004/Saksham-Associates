import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const useFetchProjectsByCategory = (categoryTag) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(
          collection(db, "Projects"),
          where("category", "==", categoryTag),
        );

        const querySnapshot = await getDocs(q);
        const projectsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [categoryTag]);

  return { projects, loading };
};

export default useFetchProjectsByCategory;
