import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2020 - 2024',
      status: 'Currently Pursuing',
      gpa: '3.8/4.0',
      details: 'Specializing in Web Development and Software Engineering'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Tech Institute',
      year: '2018 - 2020',
      status: 'Completed',
      gpa: '3.9/4.0',
      details: 'Foundation in programming and database management'
    },
    {
      degree: 'High School Certificate',
      institution: 'Central Public School',
      year: '2016 - 2018',
      status: 'Completed',
      gpa: '92%',
      details: 'Science and Mathematics specialization'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="status">{edu.status}</span>
                </div>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
                <p className="details">{edu.details}</p>
                <div className="gpa-badge">{edu.gpa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
