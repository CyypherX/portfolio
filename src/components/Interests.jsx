import "./Interests.css";

const interests = [
  {
    number: "01",
    name: "Technology",
    label: "TECHNOLOGY",
    image: "/interests/technology.png",
  },
  {
    number: "02",
    name: "Building Projects",
    label: "BUILDING PROJECTS",
    image: "/interests/building-projects.png",
  },
  {
    number: "03",
    name: "Gaming",
    label: "GAMING",
    image: "/interests/gaming.png",
  },
  {
    number: "04",
    name: "Creative Design",
    label: "CREATIVE DESIGN",
    image: "/interests/creative-design.png",
  },
];

function Interests() {
  return (
    <section className="section interests-section" id="interests">
      <div className="section-inner">

        <div className="interests-label">
          <span>06</span>
          <div className="section-line"></div>
          SOME OF MY INTERESTS
        </div>

        <div className="interests-heading-row">
          <div className="interests-heading-block">
            <h2 className="interests-heading">
              Beyond the
              <br />
              <span>screen.</span>
            </h2>

            <p className="interests-description">
              A few things that keep me curious, creative and
              constantly exploring beyond everyday development.
            </p>
          </div>

          <div className="interests-meta">
            <span>AREAS I ENJOY</span>
            <strong>04</strong>
            <small>INTERESTS</small>
          </div>
        </div>

        <div className="interests-grid">
          {interests.map((interest) => (
            <article
              className="interest-card"
              key={interest.name}
            >
              <div className="interest-card-top">
                <span className="interest-number">
                  {interest.number}
                </span>

                <span className="interest-card-label">
                  {interest.label}
                </span>

                <span className="interest-plus">↗</span>
              </div>

              <div className="interest-image-wrap">
                <img
                  src={interest.image}
                  alt={`${interest.name} title card`}
                  className="interest-image"
                />

                <div className="interest-image-overlay"></div>

                <div className="interest-image-caption">
                  <span>{interest.number} / 04</span>
                  <div></div>
                  <span>{interest.name}</span>
                </div>
              </div>

              <div className="interest-card-bottom">
                <h3>{interest.name}</h3>
                <span>EXPLORE / INTEREST</span>
              </div>
            </article>
          ))}
        </div>

        <div className="interests-footer">
          <span>06</span>
          <div></div>
          <p>CURIOUS • CREATIVE • ALWAYS EXPLORING</p>
          <span>↗</span>
        </div>

      </div>
    </section>
  );
}

export default Interests;
