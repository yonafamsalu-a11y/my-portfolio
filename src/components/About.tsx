function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Building digital experiences that are simple and useful.
            </h3>

            <p>
              I'm a frontend developer interested in building modern,
              responsive, and user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas and designs into functional interfaces
              using React, TypeScript, JavaScript, HTML, and CSS. I'm also
              continuously learning new technologies and improving my
              problem-solving skills.
            </p>

            <p>
              My goal is to create applications that are not only visually
              appealing, but also accessible, responsive, maintainable, and
              enjoyable to use.
            </p>
          </div>

          <div className="about-details">

            <div className="detail-card">
              <span className="detail-number">01</span>
              <h3>Frontend</h3>
              <p>
                Creating responsive interfaces with React and TypeScript.
              </p>
            </div>

            <div className="detail-card">
              <span className="detail-number">02</span>
              <h3>Problem Solving</h3>
              <p>
                Breaking complex problems into simple and practical solutions.
              </p>
            </div>

            <div className="detail-card">
              <span className="detail-number">03</span>
              <h3>Continuous Learning</h3>
              <p>
                Constantly improving my skills and exploring new technologies.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About;