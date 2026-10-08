function Footer() {
const currentYear = new Date().getFullYear()

return (
<footer className="footer">
<div className="footer-container">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        <span>&lt;</span>
        Yonaf
        <span>/&gt;</span>
      </a>

      <p>
        Building modern and user-friendly digital experiences.
      </p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-socials">
      <a
        href="https://github.com/yonafamsalu-a11y/My-co/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/yonaf-amsalu-440578442/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        LinkedIn
      </a>
    </div>

    <div className="footer-bottom">
      <p>
        © {currentYear} Yonaf Amsalu. All rights reserved.
      </p>
    </div>

  </div>
</footer>

)
}

export default Footer