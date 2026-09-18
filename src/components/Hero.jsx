import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      <div className="hero-content">

        {/* ================= LEFT ================= */}

        <div className="hero-left">

          <div className="hero-status">
            <span className="status-dot"></span>
            SOFTWARE DEVELOPER
          </div>


          <div className="hero-name">
            <span>SPANDAN</span>
            <span>CHATTERJEE</span>
          </div>


          <p className="hero-description">
            Developer focused on creating thoughtful applications,
            intelligent systems and digital experiences with modern
            technologies.
          </p>


          <div className="hero-actions">

            <a href="#work" className="primary-button">
              VIEW MY WORK
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              LET'S CONNECT
            </a>

          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="hero-right">

          <div className="code-window">

            {/* Header */}

            <div className="code-header">

              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file">
                developer.tsx
              </div>

              <div className="code-react">
                React
              </div>

            </div>


            {/* Code */}

            <div className="code-body">


              <div className="code-line">
                <span className="line-number">01</span>

                <span className="code-text">
                  <span className="keyword">import</span>{" "}
                  <span className="bracket">{"{"}</span>{" "}
                  <span className="variable">Developer</span>{" "}
                  <span className="bracket">{"}"}</span>{" "}
                  <span className="keyword">from</span>{" "}
                  <span className="string">'./core'</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">02</span>
                <span className="code-text"></span>
              </div>


              <div className="code-line">
                <span className="line-number">03</span>

                <span className="code-text">
                  <span className="keyword">const</span>{" "}
                  <span className="function">developer</span>{" "}
                  <span className="operator">=</span>{" "}
                  <span className="bracket">{"{"}</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">04</span>

                <span className="code-text indent">
                  <span className="property">name</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">
                    "Spandan Chatterjee"
                  </span>
                  <span className="operator">,</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">05</span>

                <span className="code-text indent">
                  <span className="property">role</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">
                    "Software Developer"
                  </span>
                  <span className="operator">,</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">06</span>

                <span className="code-text indent">
                  <span className="property">focus</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">
                    "Technology &amp; Innovation"
                  </span>
                  <span className="operator">,</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">07</span>

                <span className="code-text indent">
                  <span className="property">status</span>
                  <span className="operator">:</span>{" "}
                  <span className="string">
                    "available"
                  </span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">08</span>

                <span className="code-text">
                  <span className="bracket">{"}"}</span>
                  <span className="operator">;</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">09</span>
                <span className="code-text"></span>
              </div>


              <div className="code-line">
                <span className="line-number">10</span>

                <span className="code-text">
                  <span className="keyword">export default</span>{" "}
                  <span className="variable">developer</span>
                  <span className="operator">;</span>
                </span>
              </div>


              <div className="code-line">
                <span className="line-number">11</span>

                <span className="code-text cursor-line">
                  <span className="cursor"></span>
                </span>
              </div>


            </div>


            {/* Footer */}

            <div className="code-footer">

              <span>TypeScript React</span>

              <span>UTF-8</span>

              <span>Ln 11</span>

            </div>

          </div>


          <div className="code-caption">
            <span>01</span>
            <div></div>
            <span>DEVELOPER / PROFILE</span>
          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="hero-footer">

        <div className="scroll-hint">
          <span className="scroll-arrow">↓</span>
          SCROLL TO EXPLORE
        </div>


        <div className="availability">
          <span></span>
          AVAILABLE FOR CREATIVE WORK
        </div>

      </div>

    </section>
  );
}

export default Hero;