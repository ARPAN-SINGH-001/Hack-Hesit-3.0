import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <a href="/">
          HACKHEIST
        </a>
      </div>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#prizes">Prizes</a>
        <a href="#timeline">Timeline</a>
      </div>

      {/* Registration button */}
      <div className="nav-cta">
        <a href="#register">
          Register Now
        </a>
      </div>
    </nav>
  )
}

export default Navbar
