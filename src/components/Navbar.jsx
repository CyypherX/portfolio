import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        CyypherX<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#work">WORK</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a href="#home" className="nav-brand-logo" aria-label="CyypherX home">
        <img src="/CyypherX logo.png" alt="CyypherX" />
      </a>
    </nav>
  );
}

export default Navbar;
