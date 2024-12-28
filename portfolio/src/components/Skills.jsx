import React, { useEffect, useState } from "react";

const Skills = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        fetch("/logos.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setLogos(data))
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);

    return (
        <div className="skills-container flex justify-center gap-x-52 pb-20 ">
            <h2 className="text-indigo-700  font-semibold text-5xl">Skills</h2>
            <div className=" grid grid-cols-2 gap-y-12 gap-36">
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className="flex items-center gap-6 "
                    >
                        <img
                            src={logo.logo}
                            alt={logo.name}
                            className="w-32 h-28 object-contain"
                        />
                        <p className="uppercase text-gray-500 font-semibold">{logo.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
