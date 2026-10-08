function Contact() {
return (
<section id="contact" className="contact-section">
<div className="section-container">

    <div className="section-heading">
      <p className="section-label">Let's work together</p>
      <h2>Contact Me</h2>
    </div>

    <div className="contact-content">

      <div className="contact-info">
        <h3>
          Have a project in mind?
        </h3>

        <p>
          I'm always interested in learning, building new projects,
          and connecting with people. Feel free to reach out.
        </p>

        <div className="contact-details">

          <a href="mailto:your.email@example.com">
            <span>Email</span>
            yonafamsalu@gmail.com
          </a>

          <a href="https://github.com/yonafamsalu-a11y/My-co/" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            github.com
          </a>

          <a
            href="https://www.linkedin.com/in/yonaf-amsalu-440578442/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            linkedin.com
          </a>

        </div>
      </div>

      <form className="contact-form">

        <div className="form-group">
          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary contact-submit"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>

)
}

export default Contact