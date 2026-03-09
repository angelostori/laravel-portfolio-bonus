import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import { DotWave } from 'ldrs/react';

export default function ProjectsDetails() {
    const { id } = useParams();

    const { project, fetchSingleProject, loading } = useContext(ProjectContext);

    useEffect(() => {
        fetchSingleProject(id);
    }, [id]);

    if (loading) return <DotWave size="47" speed="1" color="black" />;

    if (!project) return <div className="container mt-5">Progetto non trovato.</div>;

    return (
        <div className="container mt-5">
            <h1>{project.name}</h1>
            <h5 className="text-muted">Cliente: {project.client}</h5>

            {project.type && (
                <span className="badge bg-primary mb-3">{project.type.name}</span>
            )}

            <div className="card shadow-sm p-4">
                <p><strong>Periodo:</strong> {project.period}</p>
                <p>{project.description}</p>
            </div>

            <div className="mt-3">
                {project.technologies?.map(tech => (
                    <span key={tech.id} className="badge me-1" style={{ backgroundColor: tech.color }}>
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}