import './Skills.css';
import PropTypes from 'prop-types';

const Skills = () => {
  const skillsData = {
    technical: {
      'Front End': [
        { name: 'HTML', level: 70 },
        { name: 'CSS', level: 50 },

      ],
      'Backend': [
        { name: 'SQL', level: 60 },
      ],
      'Others': [
        { name: 'Github', level: 80 },
        { name: 'Vercel', level: 70 },
        { name: 'Canva', level: 65 }
      ]
    },
    soft: [
      { name: 'Communication', level: 60 },
      { name: 'Team Collaboration', level: 88 },
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
    SkillCategory.propTypes = {
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired
        })
      ).isRequired
    };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="technical-grid">
              {Object.entries(skillsData.technical).map(([subTitle, skills]) => (
                <div key={subTitle} className="technical-subcategory">
                  <h4 className="subcategory-title">{subTitle}</h4>
                  <div className="skills-list">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
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
              ))}
            </div>
          </div>
          <SkillCategory title="Soft Skills" skills={skillsData.soft} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
