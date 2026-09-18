import "./Projects.css";

const SPENDWISE_WEBSITE =
  "https://cyypherwise.vercel.app/";

const SPLITEASE_APK =
  "https://github.com/CyypherX/SplitEase/releases/latest/download/SplitEase-v1.0.0.apk";

const SPLITEASE_GITHUB =
  "https://github.com/CyypherX/SplitEase";

function ProjectArtwork({ image, alt, className = "" }) {
  return (
    <div className={`project-artwork ${className}`}>
      <div className="artwork-glow"></div>

      <div className="artwork-frame">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="work">

      {/* Background */}
      <div className="projects-grid"></div>

      <div className="projects-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <header className="projects-header">

          <div className="projects-heading-block">

            <div className="projects-label">
              <span>04</span>
              <i></i>
              MY PROJECTS
            </div>

            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>

            <p>
              A collection of applications, experiments and ideas
              created while learning, building and exploring
              different areas of technology.
            </p>

          </div>

          <div className="projects-header-meta">

            <span>SELECTED WORK</span>

            <strong>03</strong>

            <small>PROJECTS</small>

          </div>

        </header>


        {/* =========================================
            FEATURED PROJECTS
        ========================================= */}

        <div className="project-section-heading">

          <div className="project-section-heading-left">

            <span className="heading-marker"></span>

            <div>
              <h3>Featured Projects</h3>

              <p>
                Applications I've spent time designing and building.
              </p>
            </div>

          </div>

          <span className="project-section-count">
            01 — 02
          </span>

        </div>


        <div className="featured-projects">


          {/* =========================================
              SPENDWISE
          ========================================= */}

          <article className="project-card spendwise-card">

            <div className="project-card-top">

              <div className="project-index">
                01
              </div>

              <div className="project-state green-state">
                <span></span>
                FEATURED
              </div>

            </div>


            <div className="project-card-main">

              {/* SpendWise Title Card */}

              <ProjectArtwork
                image="/projects/spendwise.png"
                alt="SpendWise project title card"
                className="spendwise-art"
              />


              {/* SpendWise Information */}

              <div className="project-information">

                <div className="project-mini-label">
                  PERSONAL FINANCE
                  <span>/</span>
                  APPLICATION
                </div>

                <h3>
                  SpendWise
                </h3>

                <p>
                  A personal finance application focused on helping
                  users organize and understand their spending through
                  a clean digital experience.
                </p>


                <div className="project-tags">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Database</span>

                </div>


                <div className="project-info-divider"></div>


                <div className="project-info-meta">

                  <div>
                    <span>TYPE</span>
                    <strong>
                      Application
                    </strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong className="active-text">
                      Active
                    </strong>
                  </div>

                </div>


                {/* SpendWise Actions */}

                <div className="project-actions">

                  <a
                    href={SPENDWISE_WEBSITE}
                    className="project-button project-button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW PROJECT
                    <span>↗</span>
                  </a>

                  <a
                    href="#"
                    className="project-button project-button-secondary"
                    onClick={(event) => event.preventDefault()}
                  >
                    SOURCE CODE
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>


            <div className="project-card-bottom">

              <span>
                01 / SELECTED PROJECT
              </span>

              <div></div>

              <span>
                SPENDWISE
              </span>

            </div>

          </article>



          {/* =========================================
              SPLITEASE
          ========================================= */}

          <article className="project-card splitease-card">

            <div className="project-card-top">

              <div className="project-index">
                02
              </div>

              <div className="project-state purple-state">
                <span></span>
                FEATURED
              </div>

            </div>


            <div className="project-card-main">

              {/* SplitEase Title Card */}

              <ProjectArtwork
                image="/projects/splitease.png"
                alt="SplitEase project title card"
                className="splitease-art"
              />


              {/* SplitEase Information */}

              <div className="project-information">

                <div className="project-mini-label">
                  MOBILE
                  <span>/</span>
                  UTILITY
                </div>

                <h3>
                  SplitEase
                </h3>

                <p>
                  A mobile bill-splitting application designed to
                  make group expense calculations simple, organized
                  and easy to use.
                </p>


                <div className="project-tags">

                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Android</span>

                </div>


                <div className="project-info-divider"></div>


                <div className="project-info-meta">

                  <div>
                    <span>TYPE</span>
                    <strong>
                      Mobile App
                    </strong>
                  </div>

                  <div>
                    <span>VERSION</span>
                    <strong className="purple-text">
                      v1.0.0
                    </strong>
                  </div>

                </div>


                {/* SplitEase Actions */}

                <div className="project-actions">

                  <a
                    href={SPLITEASE_APK}
                    className="project-button project-button-purple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOWNLOAD APK
                    <span>↓</span>
                  </a>

                  <a
                    href={SPLITEASE_GITHUB}
                    className="project-button project-button-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SOURCE CODE
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </div>


            <div className="project-card-bottom">

              <span>
                02 / SELECTED PROJECT
              </span>

              <div></div>

              <span>
                SPLITEASE
              </span>

            </div>

          </article>

        </div>


        {/* =========================================
            CURRENTLY BUILDING
        ========================================= */}

        <div className="project-section-heading building-heading">

          <div className="project-section-heading-left">

            <span className="heading-marker blue-marker"></span>

            <div>
              <h3>Currently Building</h3>

              <p>
                Something still in development.
              </p>
            </div>

          </div>

          <span className="project-section-count">
            03
          </span>

        </div>


        {/* =========================================
            ELVYNQ
        ========================================= */}

        <article className="coming-project-card">

          <div className="coming-project-left">

            <div className="coming-project-number">
              03
            </div>

            <div className="coming-project-status">
              <span></span>
              COMING SOON
            </div>

          </div>


          {/* Elvynq Title Card */}

          <div className="coming-project-art">

            <ProjectArtwork
              image="/projects/elvynq.png"
              alt="Elvynq project title card"
              className="elvynq-art"
            />

          </div>


          {/* Elvynq Information */}

          <div className="coming-project-information">

            <div className="project-mini-label">
              WEB
              <span>/</span>
              COMMUNICATION
            </div>

            <h3>
              Elvynq
            </h3>

            <p>
              A communication experience currently under
              development. More features and interactions are
              being explored before its full release.
            </p>


            <div className="project-tags">

              <span>React</span>
              <span>Vite</span>
              <span>Supabase</span>

            </div>


            <div className="coming-soon-box">

              <div className="coming-pulse"></div>

              <div>

                <strong>
                  IN DEVELOPMENT
                </strong>

                <span>
                  More coming soon.
                </span>

              </div>

            </div>

          </div>


          <div className="coming-project-line"></div>

        </article>


        {/* =========================================
            MANY MORE PROJECTS
        ========================================= */}

        <article className="more-projects-card">

          <div className="more-projects-number">
            04
          </div>


          <div className="more-projects-content">

            <div className="more-projects-copy">

              <div className="project-mini-label">
                PROJECT ARCHIVE
              </div>

              <h3>
                Many more
                <br />
                <span>
                  projects &amp; experiments.
                </span>
              </h3>

              <p>
                Not everything needs a giant case study. I've also
                worked on smaller builds, experiments and ideas
                across different technologies.
              </p>


              <div className="more-project-tags">

                <span>WEB</span>
                <span>MOBILE</span>
                <span>AI &amp; ML</span>
                <span>IoT</span>
                <span>EXPERIMENTS</span>

              </div>

            </div>


            {/* Decorative Visual */}

            <div className="more-projects-visual">

              <div className="visual-line line-a"></div>

              <div className="visual-line line-b"></div>

              <div className="visual-line line-c"></div>


              <div className="visual-node node-a">
                &lt;/&gt;
              </div>

              <div className="visual-node node-b">
                AI
              </div>

              <div className="visual-node node-c">
                #
              </div>

              <div className="visual-node node-d">
                &amp;
              </div>


              <div className="visual-center">

                <span>
                  +
                </span>

                <small>
                  MORE
                </small>

              </div>

            </div>

          </div>


          <div className="more-projects-footer">

            <span>
            
            </span>

            <div></div>

            <span>
             
            </span>

          </div>

        </article>


        {/* =========================================
            SECTION FOOTER
        ========================================= */}

        <div className="projects-footer">

          <span>
            04
          </span>

          <div></div>

          <p>
            BUILDING • EXPERIMENTING • LEARNING
          </p>

          <span>
            ↗
          </span>

        </div>

      </div>

    </section>
  );
}

export default Projects;