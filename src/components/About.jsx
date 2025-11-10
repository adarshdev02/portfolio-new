import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I transform
              ideas into elegant, functional solutions.
            </p>
            <p className="about-paragraph">
              My journey in web development started with a curiosity for how things work on the
              web, and has evolved into a career dedicated to crafting beautiful, performant
              applications that make a difference.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
