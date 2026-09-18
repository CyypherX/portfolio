function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-top">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="terminal-title">
          spandan@dev ~ terminal
        </div>
      </div>

      <div className="terminal-content">
        <div className="terminal-line">
          <span className="terminal-user">spandan@dev</span>
          <span>:</span>
          <span className="terminal-path">~</span>
          <span>$</span>
          <strong>whoami</strong>
        </div>

        <div className="terminal-output">
          software_developer
        </div>

        <div className="terminal-line">
          <span className="terminal-user">spandan@dev</span>
          <span>:</span>
          <span className="terminal-path">~</span>
          <span>$</span>
          <strong>stack --current</strong>
        </div>

        <div className="terminal-output">
          React · JavaScript · Python · Flutter
          <br />
          Node.js · MongoDB · SQL · ML
        </div>

        <div className="terminal-line">
          <span className="terminal-user">spandan@dev</span>
          <span>:</span>
          <span className="terminal-path">~</span>
          <span>$</span>
          <strong>github</strong>
        </div>

        <div className="terminal-output cyan">
          CyypherX
        </div>

        <div className="terminal-line">
          <span className="terminal-user">spandan@dev</span>
          <span>:</span>
          <span className="terminal-path">~</span>
          <span>$</span>
          <strong>status</strong>
        </div>

        <div className="terminal-output online">
          ● ONLINE — building something new
        </div>

        <div className="terminal-line last">
          <span className="terminal-user">spandan@dev</span>
          <span>:</span>
          <span className="terminal-path">~</span>
          <span>$</span>
          <span className="typing-cursor" />
        </div>
      </div>
    </div>
  );
}

export default Terminal;