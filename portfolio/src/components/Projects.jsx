import React, { useEffect, useState } from 'react';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data fetched successfully:", data);
                setProjects(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className='projects-container'>
            <h1 className='projects-title'>Projects</h1>
            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div key={index} className='project-card'>
                        <img src={project.image} alt={project.title} className='project-image' />
                        <h2 className='project-title'>{project.title}</h2>
                        <p className='project-description'>{project.description}</p>
                        <div className='tags'>
                            {project.tags.map((tag, index) => (
                                <span key={index} className='tag'>{tag}</span>
                            ))}
                        </div>
                        <div className='project-links'>
                            <a href={project.viewSite} target='_blank' rel='noopener noreferrer' className='view-site-button'>View Site</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='github-button'>Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

