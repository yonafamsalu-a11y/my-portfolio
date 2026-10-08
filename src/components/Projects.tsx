function Projects() {
const projects = [
{
title: 'Smart Web Application',
description:
'A modern responsive web application designed to provide a simple, fast, and user-friendly experience.',
technologies: ['React', 'TypeScript', 'CSS'],
github: '#',
demo: '#',
},
{
title: 'Management System',
description:
'A practical management application focused on organizing information and making everyday tasks easier.',
technologies: ['JavaScript', 'Node.js', 'Express.js'],
github: '#',
demo: '#',
},
{
title: 'Portfolio Website',
description:
'A responsive personal portfolio showcasing my skills, projects, experience, and contact information.',
technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
github: '#',
demo: '#',
},
]

return (
<section id="projects" className="projects-section">
<div className="section-container">

    <div className="section-heading">
      <p className="section-label">What I've built</p>
      <h2>Projects</h2>
    </div>

    <div className="projects-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>

          <div className="project-content">
            <div className="project-number">
              {String(projects.indexOf(project) + 1).padStart(2, '0')}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span
                  className="project-tech"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            </div>
          </div>

        </article>
      ))}
    </div>

  </div>
</section>

)
}

export default Projects