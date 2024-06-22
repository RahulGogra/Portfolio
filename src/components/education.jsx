// src/pages/Qualifications.jsx

import "../css/education.css";
import TriangleBackground from "./triangleBackground";

const education = [
    {
        title: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Indian Institute Of Information Technology, Manipur",
        year: "2022 - 2026",
        description:
            "Focused on software development, algorithms, and data structures.",
    },
    {
        title: "Full-Stack Web Development",
        institution: "Self Taught",
        year: "2023",
        description:
            "An intensive program covering React, Node.js, Express, and MongoDB.",
    },
    {
        title: "Certified React Developer",
        institution: "Online Certification Platform",
        year: "2022",
        description: "Gained advanced knowledge in React and its ecosystem.",
    },
];

const Education = () => {
    return (
        <div className="qualifications">
            <TriangleBackground />
            <h1>My Qualifications</h1>
            <div className="qualifications-list">
                {education.map((qualification, index) => (
                    <div key={index} className="qualification-item">
                        <h2>{qualification.title}</h2>
                        <h3>{qualification.institution}</h3>
                        <span>{qualification.year}</span>
                        <p>{qualification.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
