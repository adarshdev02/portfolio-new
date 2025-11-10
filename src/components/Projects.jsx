import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio template with theme switching capabilities',
      tags: ['React', 'CSS3', 'Vite'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with beautiful visualizations',
      tags: ['React', 'API', 'Charts.js'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with messaging and posts',
      tags: ['React', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Content management system for bloggers and writers',
      tags: ['React', 'Next.js', 'Markdown'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image"></div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
