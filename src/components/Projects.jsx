import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Certificate Generator',
      description: 'A tool for generating e-certificates',
      tags: ['Html', 'CSS', 'React', 'Node.js', 'MongoDB'],
      image: 'https://i.ibb.co/FLQ7Rs1t/Screenshot-2025-11-11-015339.png',
      link: 'https://certificate-generator-orpin.vercel.app/'
    },
    {
      title: 'Research Paper on Enhancing Emotional Resilience',
      description: 'A research paper exploring strategies to enhance emotional resilience in individuals.',
      tags: ['Research', 'Psychology'],
      image: 'https://i.ibb.co/PvBr0Q3W/Screenshot-2025-11-11-015744.png',
      link: 'https://www.ijtsrd.com/papers/ijtsrd75003.pdf'
    },
    {
      title: 'Lifeline',
      description: 'A web-based mental health support system offering self-help tools, and emergency assistance.',
      tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Mysql', 'PHP MyAdmin'],
      image: 'https://i.ibb.co/Mxf3CP81/Screenshot-2025-11-11-015626.png',

    },
    {
      title: 'Google Drive Clone',
      description: 'Clone of Google Drive',
      tags: ['HTML', 'CSS'],
      image: 'https://i.ibb.co/RGTSbr1f/Screenshot-2025-11-11-015036.png',
      link: 'https://ybnmzv.csb.app/'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} screenshot`} />
                ) : (
                  <div className="project-image-placeholder">Image coming soon</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && <a href={project.link} className="project-link">View Project →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
