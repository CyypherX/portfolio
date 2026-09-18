import "./Contact.css";

const items = [
  {
    label: "GITHUB",
    value: "CyypherX",
    href: "https://github.com/CyypherX",
    external: true,
    icon: "github",
    banner: "/contact/github.png",
  },
  {
    label: "LINKEDIN",
    value: "Spandan Chatterjee",
    href: "https://www.linkedin.com/in/spandan-chatterjee-1672a4313/",
    external: true,
    icon: "linkedin",
    banner: "/contact/linkedin.png",
  },
  {
    label: "INSTAGRAM",
    value: "the_only_spandan",
    href: "https://www.instagram.com/the_only_spandan",
    external: true,
    icon: "instagram",
    banner: "/contact/instagram.png",
  },
  {
    label: "MOBILE",
    value: "+91 9330738131",
    href: "tel:+919330738131",
    icon: "phone",
    banner: "/contact/mobile.png",
  },
  {
    label: "GMAIL",
    value: "chatterjeespandan45@gmail.com",
    href: "mailto:chatterjeespandan45@gmail.com",
    icon: "mail",
    banner: "/contact/gmail.png",
  },
  {
    label: "RESUME",
    value: "View Resume",
    href: "/resume.pdf",
    external: true,
    icon: "resume",
    banner: "/contact/resume.png",
  },
];

function Icon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.59 2.34 1.13 2.91.86.09-.67.35-1.13.64-1.39-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.15c.85 0 1.7.12 2.49.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v3.53c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/>
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M5.2 3.4a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6ZM3.3 9.4h3.8v11.2H3.3V9.4Zm6.1 0h3.65v1.53h.05c.51-.96 1.75-1.97 3.61-1.97 3.86 0 4.57 2.54 4.57 5.84v5.8h-3.8v-5.14c0-1.23-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.7v5.24H9.4V9.4Z"/>
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.4" cy="6.7" r="1" className="icon-fill"/>
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 3.1 9.4 2.3c.55-.2 1.16.08 1.39.62l1.14 2.75c.22.53.07 1.14-.37 1.52L10.1 8.4a12.8 12.8 0 0 0 5.5 5.5l1.2-1.46c.38-.44.99-.59 1.52-.37l2.75 1.14c.54.23.82.84.62 1.39l-.8 2.2c-.19.52-.69.87-1.24.87C10.54 17.67 6.33 13.46 6.33 8.1c0-.55.35-1.05.87-1.24Z"/>
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5"/>
        <path d="m4.5 7 7.5 5.6L19.5 7"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5h7l4 4v13H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z"/>
      <path d="M14 3.5v4h4M8.5 12h7M8.5 15.5h7"/>
    </svg>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-glow" />

      <div className="section-inner">
        <div className="contact-content">
          <div className="contact-intro">
            <div className="section-label contact-section-label">
              <span>07</span>
              <div className="section-line" />
              CONTACT
            </div>

            <div className="contact-kicker">
              <span className="contact-live-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <h2 className="contact-heading">
              Have an idea?
              <br />
              <span>Let&apos;s talk.</span>
            </h2>

            <p className="contact-description">
              Whether it&apos;s a project, collaboration, opportunity or
              simply an interesting idea — let&apos;s connect and build
              something meaningful.
            </p>
          </div>

          <div className="contact-grid">
            {items.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`contact-card contact-card-${item.label.toLowerCase()}`}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <img
                  className="contact-card-banner"
                  src={item.banner}
                  alt=""
                  aria-hidden="true"
                />

                <div className="contact-card-overlay" />

                <div className="contact-card-top">
                  <span className="contact-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="contact-card-icon">
                    <Icon type={item.icon} />
                  </span>
                </div>

                <div className="contact-card-bottom">
                  <span className="contact-card-label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <span className="contact-card-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="site-footer">
          <span>© 2026 SPANDAN CHATTERJEE</span>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
