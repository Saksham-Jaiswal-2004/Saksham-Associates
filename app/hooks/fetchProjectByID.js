import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ProjectById = (id) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchProject = async () => {
            try {
                const docRef = doc(db, 'Projects', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProject(docSnap.data());
                } else {
                    console.log('No such document!');
                    setProject(null);
                }
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    return { project, loading };
};

export default ProjectById;