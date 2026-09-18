import "./About.css";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">

        {/* Section Header */}
        <div className="section-label">
          <span>02</span>
          <div className="section-line"></div>
          ABOUT ME
        </div>

        <h2 className="section-heading">
          More than just
          <br />
          <span>code.</span>
        </h2>

        <p className="section-description">
          I enjoy building digital products, exploring modern technologies
          and turning ideas into practical experiences.
        </p>

        {/* About Content */}
        <div className="about-grid">

          {/* About Text */}
          <div className="about-copy">
            <p>
              I'm a software developer interested in creating thoughtful
              applications and exploring the possibilities of modern
              technology.
            </p>

            <p>
              Alongside software development, my academic journey focuses
              on Machine Learning, giving me exposure to the wider field
              of Artificial Intelligence and Machine Learning.
            </p>

            <p>
              I like experimenting with different technologies, learning
              through projects and continuously improving the way I build
              things.
            </p>
          </div>

          {/* Profile Card */}
          <div className="profile-card glass-card">

            <div className="profile-header">
              <span>PROFILE</span>

              <div className="profile-active">
                <span></span>
                ACTIVE
              </div>
            </div>

            <div className="profile-list">

              <div className="profile-row">
                <span className="profile-key">NAME</span>
                <span className="profile-value">
                  Spandan Chatterjee
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">ROLE</span>
                <span className="profile-value">
                  Software Developer
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">EDUCATION</span>
                <span className="profile-value">
                  BCA Honours
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">SPECIALIZATION</span>
                <span className="profile-value">
                  Machine Learning
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">TECHNICAL DOMAIN</span>
                <span className="profile-value">
                  Artificial Intelligence &amp; Machine Learning
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">LOCATION</span>
                <span className="profile-value">
                  Kolkata,West Bengal,India
                </span>
              </div>

              <div className="profile-row">
                <span className="profile-key">STATUS</span>
                <span className="profile-value profile-status">
                  Available for opportunities
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* About Traits */}
        <div className="about-traits">

          <div className="trait-card glass-card">
            <span className="trait-number">01</span>
            <h3>CURIOUS</h3>
            <p>
              Always exploring new technologies, ideas and better ways
              to solve problems.
            </p>
          </div>

          <div className="trait-card glass-card">
            <span className="trait-number">02</span>
            <h3>BUILDING</h3>
            <p>
              Learning by turning concepts into real applications and
              experimental projects.
            </p>
          </div>

          <div className="trait-card glass-card">
            <span className="trait-number">03</span>
            <h3>IMPROVING</h3>
            <p>
              Continuously refining my skills, code and approach to
              development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;