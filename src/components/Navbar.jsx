function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">

        <a href="#home" className="logo">
          <span className="logo-mark">S</span>
          SANKEERTH
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a href="#contact" className="nav-talk">
            Let's Talk
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;