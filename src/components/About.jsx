import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
             I&apos;m an enthusiastic front-end developer with a passion for design and a focus on creating clean, responsive, and user-friendly websites. Skilled in HTML, CSS, and SQL, I enjoy turning ideas into simple yet elegant digital experiences.
            </p>
            <p className="about-paragraph">
              My journey began with curiosity about how websites come to life, and it’s grown into a commitment to building creative, accessible, and meaningful web solutions that make a difference.
            </p>
            
            <div className="about-stats-placeholder" aria-hidden="true" />
            </div>
          <div className="about-image">
            <div className="image-placeholder">
                           <img src="https://i.ibb.co/PzDj5yvP/me3.png" alt="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
