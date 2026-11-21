import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      
      <div className="hero-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-vault">
        <div className="vault-ring vault-ring-outer"></div>
        <div className="vault-ring vault-ring-middle"></div>
        <div className="vault-ring vault-ring-inner"></div>
        <div className="vault-scan"></div>
      </div>

      <div className="hero-content">
        <p className="hero-tagline">GDG PRESENTS · 2026</p>

        <h1>
          THE ULTIMATE
          <span> HACKHEIST</span>
        </h1>

        <p className="hero-description">
          Code the plan. Execute the heist. Build something extraordinary.
        </p>

        <div className="hero-buttons">
          <a href="#register" className="hero-btn-primary">
            Register Now
          </a>

          <a href="#about" className="hero-btn-secondary">
            Explore the Mission
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
