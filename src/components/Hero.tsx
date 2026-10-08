import profileImage from '../assets/profile.png'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Left side */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Yonaf Amsalu
          </h1>

          <h2>
            Frontend Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications
            using React, TypeScript, JavaScript, HTML, and CSS.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="btn btn-secondary"
              download
            >
              Download CV
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right side */}
        <div className="hero-image-container">

          <div className="hero-image-wrapper">

            <img
              src={profileImage}
              alt="Yonaf Amsalu"
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero