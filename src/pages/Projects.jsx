import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Link } from "react-router-dom";
import { DotWave } from 'ldrs/react';

export default function Projects() {
    const { projects, loading } = useContext(ProjectContext);

    if (loading) return (
        <div className="d-flex justify-content-center mt-5">
            <DotWave size="47" speed="1" color="black" />
        </div>
    );

    return (
        <div className="container mt-4">
            <h1 className="mb-4">I miei Progetti</h1>
            <div className="row g-4">
                {projects.map(project => (
                    <div key={project.id} className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{project.client}</h6>

                                {project.type && (
                                    <span className="badge bg-info text-dark mb-3">
                                        {project.type.name}
                                    </span>
                                )}

                                <p className="card-text text-truncate">{project.description}</p>

                                <Link to={`/projects/${project.id}`} className="btn btn-primary btn-sm">
                                    Dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}