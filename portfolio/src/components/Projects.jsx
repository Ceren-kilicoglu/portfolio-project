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
        <div className="projects-container bg-yellw h-[999px] flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-[48px] font-bold text-bl leading-[48px] mb-12 -ml-[775px] ">Projects</h1>
            <div className="flex flex-col gap-16 items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card bg-whit shadow-lg rounded-[12px] overflow-hidden w-[960px] h-[360px] flex items-start "
                    >
                        {/* Görsel Alanı */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-[360px] h-full object-cover"
                        />

                        {/* İçerik Alanı */}
                        <div className="p-12 flex flex-col gap-4 flex-grow">
                            <h2 className="text-[32px] font-bold text-[#4338CA] leading-[32px]">{project.title}</h2>
                            <p className="text-[#383838] text-[16px] font-normal leading-[20px]">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-2 bg-[#4338CA] text-white text-sm font-medium rounded-[23px] "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.viewSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    View Site
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

};

export default Projects;

