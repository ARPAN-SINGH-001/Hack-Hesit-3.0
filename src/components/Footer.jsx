import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            HACK<span>HEIST</span>
          </h2>

          <p>
            Prepare for the ultimate heist.
            <br />
            Code the plan. Execute the mission.
          </p>

          <span className="footer-classified">
            CLASSIFIED // OPERATION 2026
          </span>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h3>MISSION NAVIGATION</h3>

          <a href="#about">About the Mission</a>
          <a href="#tracks">Mission Tracks</a>
          <a href="#prizes">The Vault</a>
          <a href="#timeline">Operation Timeline</a>
          <a href="#register">Join the Heist</a>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <h3>CONNECT WITH THE CREW</h3>

          <a href="#" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Discord ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <p>
          © 2026 HACKHEIST. ALL RIGHTS RESERVED.
        </p>

        <p className="footer-bottom-center">
          BUILT FOR THE BOLD.
        </p>

        <p>
          <span className="footer-status-dot"></span>
          SYSTEM STATUS: ONLINE
        </p>

      </div>

    </footer>
  );
}

export default Footer;