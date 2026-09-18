import { useState } from "react";
import "./Skills.css";

const skills = [
  {
    name: "Python",
    category: "LANGUAGE",
    level: "Core",
    description:
      "Used for programming, problem solving, automation and machine learning workflows.",
    image: "/skills/python.png",
  },
  {
    name: "Java",
    category: "LANGUAGE",
    level: "Core",
    description:
      "Object-oriented programming language used for application development and problem solving.",
    image: "/skills/java.png",
  },
  {
    name: "C#",
    category: "LANGUAGE",
    level: "Core",
    description:
      "Programming language used for application development and building software with the .NET ecosystem.",
    image: "/skills/csharp.png",
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    level: "Core",
    description:
      "Used to build interactive web applications and modern frontend experiences.",
    image: "/skills/javascript.png",
  },
  {
    name: "C / C++",
    category: "LANGUAGE",
    level: "Core",
    description:
      "Used for programming fundamentals, problem solving and understanding core computer science concepts.",
    image: "/skills/cpp.png",
  },
  {
    name: "SQL",
    category: "DATABASE",
    level: "Core",
    description:
      "Used for querying, managing and working with structured relational data.",
    image: "/skills/sql.png",
  },
  {
    name: "React",
    category: "FRONTEND",
    level: "Building",
    description:
      "Used for creating component-based interfaces and modern interactive web applications.",
    image: "/skills/react.png",
  },
  {
    name: "Node.js",
    category: "BACKEND",
    level: "Building",
    description:
      "JavaScript runtime used for backend development, APIs and server-side applications.",
    image: "/skills/nodejs.png",
  },
  {
    name: "FastAPI",
    category: "BACKEND",
    level: "Building",
    description:
      "Modern Python framework for creating fast and structured backend APIs.",
    image: "/skills/fastapi.png",
  },
  {
    name: "MongoDB",
    category: "DATABASE",
    level: "Building",
    description:
      "NoSQL database used for flexible and document-oriented application data.",
    image: "/skills/mongodb.png",
  },
  {
    name: "PostgreSQL",
    category: "DATABASE",
    level: "Building",
    description:
      "Relational database system used for structured and reliable application data.",
    image: "/skills/postgresql.png",
  },
  {
    name: "TypeScript",
    category: "LANGUAGE",
    level: "Exploring",
    description:
      "Typed superset of JavaScript used for building more structured and maintainable applications.",
    image: "/skills/typescript.png",
  },
  {
    name: "Flutter",
    category: "MOBILE",
    level: "Building",
    description:
      "Framework used for developing cross-platform mobile applications with a single codebase.",
    image: "/skills/flutter.png",
  },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  const activeIndex = skills.findIndex(
    (skill) => skill.name === activeSkill.name
  );

  const selectSkill = (skill) => {
    setActiveSkill(skill);
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">

        {/* SECTION LABEL */}
        <div className="section-label">
          <span>03</span>

          <div className="section-line"></div>

          MY SKILLS
        </div>

        {/* HEADING */}
        <div className="skills-heading-row">
          <div>
            <h2 className="section-heading">
              Tools I
              <br />
              <span>work with.</span>
            </h2>

            <p className="section-description">
              A growing technical toolkit built through learning,
              experimentation and hands-on projects.
            </p>
          </div>

          <div className="skills-counter">
            <span>SKILLS</span>

            <strong>
              {String(skills.length).padStart(2, "0")}
            </strong>
          </div>
        </div>

        {/* MAIN SKILLS AREA */}
        <div className="skills-layout">

          {/* LEFT — SKILL LIST */}
          <div className="skills-list">

            {skills.map((skill, index) => {
              const isActive =
                activeSkill.name === skill.name;

              return (
                <button
                  key={skill.name}
                  type="button"
                  className={`skill-row ${
                    isActive ? "active" : ""
                  }`}
                  onMouseEnter={() =>
                    selectSkill(skill)
                  }
                  onFocus={() =>
                    selectSkill(skill)
                  }
                  onClick={() =>
                    selectSkill(skill)
                  }
                >
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-category">
                    {skill.category}
                  </span>

                  <span className="skill-level">
                    {skill.level}
                  </span>

                  <span className="skill-arrow">
                    ↗
                  </span>
                </button>
              );
            })}

          </div>

          {/* RIGHT — TITLE CARD PREVIEW */}
          <div className="skills-preview glass-card">

            <div className="preview-top">

              <span className="preview-label">
                SELECTED SKILL
              </span>

              <span className="preview-index">
                {String(activeIndex + 1).padStart(2, "0")}
                /
                {String(skills.length).padStart(2, "0")}
              </span>

            </div>

            {/* IMAGE ONLY */}
            <div className="preview-card-area">

              <div className="skill-card-frame">

                <img
                  key={activeSkill.image}
                  src={activeSkill.image}
                  alt={`${activeSkill.name} title card`}
                  className="skill-card-image"
                />

              </div>

            </div>

            <div className="preview-footer">

              <span>
                TECHNICAL TOOLKIT
              </span>

              <div className="preview-line"></div>

              <span>
                03 / SKILLS
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;