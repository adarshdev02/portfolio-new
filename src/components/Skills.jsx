import './Skills.css';

const Skills = () => {
  const skillsData = {
    technical: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'CSS3', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ],
    soft: [
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Leadership', level: 82 },
      { name: 'Time Management', level: 85 },
      { name: 'Adaptability', level: 90 },
      { name: 'Critical Thinking', level: 92 },
      { name: 'Creativity', level: 88 }
    ]
  };

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          <SkillCategory title="Technical Skills" skills={skillsData.technical} />
          <SkillCategory title="Soft Skills" skills={skillsData.soft} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
