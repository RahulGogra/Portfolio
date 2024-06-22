import "../css/projects.css";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "This is a description for Project 1",
            src: "https://w-cked.github.io/Forecasthub/", // GitHub URL or any other URL that hosts the project's source code
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is a description for Project 2",
            src: "https://github.com/username/project2/blob/main/index.html", // GitHub URL or any other URL that hosts the project's source code
        },
        {
            id: 3,
            title: "Project 3",
            description: "This is a description for Project 3",
            src: "https://github.com/username/project3/blob/main/index.html", // GitHub URL or any other URL that hosts the project's source code
        },
    ];

    return (
        <section>
            <h2>My Projects</h2>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <iframe
                            title={project.title}
                            src={project.src}
                            frameBorder="0"
                            width="100%"
                            height="300"
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
