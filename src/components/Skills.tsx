function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    },
    {
      title: 'Programming',
      skills: ['Java', 'C++', 'Python'],
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">What I work with</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills