import { createContext, useState, useEffect } from "react";
import axios from "axios";
/* import { DotWave } from 'ldrs/react'
import 'ldrs/react/DotWave.css' */

/* // Default values shown
<DotWave
    size="47"
    speed="1"
    color="black"
/> */

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProjects = () => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}`)
            .then(res => {
                setProjects(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore nel caricamento progetti", err);
                setLoading(false);
            });
    };

    const fetchSingleProject = (id) => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(res => {
                setProject(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Progetto non trovato", err);
                setProject(null);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <ProjectContext.Provider value={{ projects, project, loading, fetchProjects, fetchSingleProject }}>
            {children}
        </ProjectContext.Provider>
    );
};