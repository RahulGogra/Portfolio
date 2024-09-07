// src/pages/Experience.jsx
import { useState } from "react";
import "../css/experience.css";
import TriangleBackground from "./triangleBackground";

const experienceData = [
    {
        id: 1,
        company: "Smart Cookie",
        role: "Backend Developer Intern",
        duration: "May 2024 - Aug 2024",
        description:
            "Worked on developing and maintaining web applications using Php and MySql. Worked with a team of senior developers and implemented various project management tools to streamline workflow.",
    },
    {
        id: 2,
        company: "Myself",
        role: "Fullstack Developer",
        duration: "2022 - Present",
        description:
            "Focusing on creating responsive and interactive UI components with React and Bootstarp. Collaborated closely with designers and backend developers to deliver a seamless user experience.",
    },
];

const Experience = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="experience-page">
            <TriangleBackground />
            <h1>My Experience</h1>
            <div className="experience-list">
                {experienceData.map((item) => (
                    <div key={item.id} className="experience-item">
                        <div
                            className="experience-header"
                            onClick={() => toggleExpand(item.id)}
                        >
                            <h2>{item.role}</h2>
                            <h3>{item.company}</h3>
                            <span>{item.duration}</span>
                        </div>
                        {expanded === item.id && (
                            <div className="experience-description">
                                <p>{item.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
