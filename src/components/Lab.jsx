import { useState } from "react";
import "./Lab.css";

const COMMAND_COLORS = [
  "cyan",
  "green",
  "purple",
  "blue",
  "yellow",
  "magenta",
];

function highlightCommand(value) {
  if (!value) {
    return <span className="lab-code-placeholder">type here...</span>;
  }

  const tokens = value.match(/("[^"\n]*"|'[^'\n]*'|\S+)/g) || [];

  return tokens.map((token, index) => {
    let className;

    if (/^(--?[a-z0-9-]+)$/i.test(token)) {
      className = "lab-code-flag";
    } else if (/^(".*"|'.*')$/.test(token)) {
      className = "lab-code-string";
    } else {
      className = `lab-code-command ${COMMAND_COLORS[index % COMMAND_COLORS.length]}`;
    }

    return (
      <span key={`${token}-${index}`} className={className}>
        {token}
        {index < tokens.length - 1 ? " " : ""}
      </span>
    );
  });
}

function Lab() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const runCommand = (event) => {
    if (event.key !== "Enter") return;

    const value = command.trim().toLowerCase();

    if (!value) return;

    let response = "";

    switch (value) {
      case "help":
        response =
          "Commands: help, projects, skills, about, contact, fav, verse, food, hobby, movie, clear";
        break;

      case "projects":
        response =
          "SpendWise • SplitEase • Elvynq (coming soon) • More experiments";
        break;

      case "skills":
        response =
          "Python • Java • C# • C/C++ • JavaScript • SQL • React • Node.js • FastAPI • MongoDB • PostgreSQL • TypeScript • Flutter";
        break;

      case "about":
        response =
          "Spandan Chatterjee — Software Developer • BCA Honours in Machine Learning";
        break;

      case "contact":
        response =
          "Let's connect and build something interesting together.";
        break;

      case "fav":
      case "favorites":
      case "favourites":
        response = favouriteResponse;
        break;

      case "verse":
        response = "Favourite Verse : Marvel";
        break;

      case "food":
        response = "Favourite Food : Biriyani";
        break;

      case "hobby":
        response = "Favourite Hobby : Gaming";
        break;

      case "movie":
        response = "Favourite Movie Genre : Horror";
        break;

      case "clear":
        setOutput("");
        setCommand("");
        return;

      default:
        // Anything that is not a built-in command is simply printed back.
        response = `You wrote: ${command.trim()}`;
    }

    setOutput(response);
    setCommand("");
  };

  const useCommand = (value) => {
    setCommand(value);
  };

  const favouriteResponse =
    "Favourite Verse : Marvel • Favourite Food : Biriyani • Favourite Hobby : Gaming • Favourite Movie Genre : Horror";

  return (
    <section className="lab-section" id="lab">

      <div className="lab-container">

        {/* =========================================
            SECTION LABEL
        ========================================= */}

        <div className="lab-label">

          <span>05</span>

          <i></i>

          SOMETHING INTERESTING

        </div>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="lab-content">

          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="lab-intro">

            <h2>
              A little
              <br />
              <span>playground.</span>
            </h2>

            <p>
              Because a portfolio doesn't always have to behave
              like a portfolio. Try interacting with this little
              developer console.
            </p>


            {/* QUICK COMMANDS */}

            <div className="lab-try">

              <span>TRY</span>

              <button
                type="button"
                onClick={() => useCommand("help")}
              >
                help
              </button>

              <button
                type="button"
                onClick={() => useCommand("projects")}
              >
                projects
              </button>

              <button
                type="button"
                onClick={() => useCommand("skills")}
              >
                skills
              </button>

              <button
                type="button"
                onClick={() => useCommand("fav")}
              >
                fav
              </button>

            </div>

          </div>


          {/* =========================================
              TERMINAL
          ========================================= */}

          <div className="lab-terminal">

            {/* Terminal Header */}

            <div className="lab-terminal-header">

              <div className="lab-terminal-dots">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <span className="lab-terminal-title">
                interactive-shell
              </span>

              <span className="lab-terminal-status">
                LIVE
              </span>

            </div>


            {/* Terminal Body */}

            <div className="lab-body">

              <div className="lab-welcome">
                Spandan's interactive console
              </div>


              <div className="lab-terminal-space"></div>


              {/* Prompt + REAL INPUT */}

              <div className="lab-input-line">

                <span className="lab-prompt">
                  visitor@spandan:~$
                </span>

                <div className="lab-code-editor">

                  <div className="lab-code-highlight" aria-hidden="true">
                    {highlightCommand(command)}
                    <span className="lab-code-caret"></span>
                  </div>

                  <input
                    className="lab-code-input"
                    type="text"
                    value={command}
                    onChange={(event) =>
                      setCommand(event.target.value)
                    }
                    onKeyDown={runCommand}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="type anything..."
                    aria-label="Interactive terminal command"
                  />

                </div>

              </div>


              {/* Output */}

              {output && (
                <div className="lab-output">

                  <span className="lab-output-arrow">
                    →
                  </span>

                  <span>
                    {output}
                  </span>

                </div>
              )}


              <div className="lab-instruction">
                Type a command and press ENTER.
              </div>

            </div>


            {/* Terminal Footer */}

            <div className="lab-terminal-footer">

              <span>
                INTERACTIVE SHELL
              </span>

              <div></div>

              <span>
                READY
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            SECTION FOOTER
        ========================================= */}

        <div className="lab-footer">

          <span>05</span>

          <div></div>

          <p>
            EXPERIMENT • INTERACT • EXPLORE
          </p>

          <span>↗</span>

        </div>

      </div>

    </section>
  );
}

export default Lab;