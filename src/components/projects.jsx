import "../css/projects.css";
import TriangleBackground from "./triangleBackground";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "ForecastHub",
            description:
                "A weather forecasting application that provides real-time weather data for any location.",
            image: "images/project1.png", // Replace with actual image URL
            src: "https://w-cked.github.io/Forecasthub/",
            techStack: ["React", "API", "CSS"],
        },
        {
            id: 2,
            title: "Portfolio Website",
            description:
                "A personal portfolio website showcasing my projects and skills.",
            image: "images/portfolio.png", // Replace with actual image URL
            src: "https://rahulgogra-c9z9tk29q-rahuls-projects-037fefb4.vercel.app/",
            techStack: ["React", "CSS", "JavaScript"],
        },
        {
            id: 3,
            title: "Algorithm Visulaizer",
            description:
                "Developed an interactive tool to visualize basic data structures, binary trees, pathfinding algorithms, and greedy algorithms.",
            image: "images/algovisual.png", // Replace with actual image URL
            src: "https://github.com/username/project3/blob/main/index.html",
            techStack: ["React", "Node.js", "MongoDB"],
        },
    ];

    return (
        <section className="projects-section">
            <TriangleBackground />
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <a
                            href={project.src}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </a>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <ul className="tech-stack">
                                {project.techStack.map((tech, index) => (
                                    <li key={index} className="tech-item">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
