function Projects() {
    const projects = [
        {
            number: "01",
            title: "Retour Solutions",
            description:
                "A production platform built for Retour Solutions, including a client-facing website and PHP-based administrative systems for complaint management and patient records.",
            image: "/images/Retour Solutions.png",
            technologies: ["PHP", "MYSQL", "JAVASCRIPT", "WORDPRESS"],
            link: "https://retoursolutions.com/",
        },

        {
            number: "02",
            title: "Iris",
            description:
                "An image classification web application that uses a pre-trained deep learning model to analyze uploaded images and identify their contents, with a simple Flask-based interface for user interaction.",
            image: "/images/Iris.png",
            technologies: ["PYTHON", "AI", "FLASK"],
            link: "https://github.com/pksankeerth/IRIS",
        },

        {
            number: "03",
            title: "Shrestha Sreekamala",
            description:
                "A modern, responsive healthcare website designed to showcase the hospital's services, departments, facilities, doctors, and patient information through a clean and accessible digital interface.",
            image: "/images/ShresthaSreekamala.png",
            technologies: ["HTML", "CSS", "JAVASCRIPT"],
            link: "https://sreshtasrikamalahospitals.in/",
        },

        {
            number: "04",
            title: "AI Interview Simulator",
            description:
                "An AI-powered interview practice platform designed to simulate technical and behavioral interviews and provide structured feedback.",
            image: null,
            technologies: ["AI", "PYTHON", "FLASK", "JAVASCRIPT"],
            link: "#",
        },
    ];

    return (
        <section className="projects-section" id="projects">

            <div className="section-label">
                04 / PROJECTS
            </div>

            <div className="projects-grid">

                {projects.map((project) => (

                    <a
                        key={project.number}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >

                        <div className="project-image">

                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            ) : (
                                <div className="project-placeholder">
                                    <div className="placeholder-content">
                                        <span>&lt;/&gt;</span>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="project-content">

                            <div className="project-number">
                                PROJECT / {project.number}
                            </div>

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-tech">

                                {project.technologies.map((tech) => (
                                    <span key={tech}>
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            <div className="project-link">
                                VIEW PROJECT ↗
                            </div>

                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}

export default Projects;