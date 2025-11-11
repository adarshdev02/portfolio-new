import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="highlight">Adarsh Mishra </span>
          </h1>
          <p className="hero-subtitle">Front End Developer with Research Experience</p>
          <p className="hero-description">
            I specialize in transforming ideas into responsive, user-friendly web solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
