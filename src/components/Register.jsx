import { motion } from "motion/react";
import "../css/register.css";

function Register() {
  return (
    <section className="register-section" id="register">

      {/* BACKGROUND EFFECTS */}
      <div className="register-grid"></div>
      <div className="register-glow"></div>

      {/* CONTENT */}
      <motion.div
        className="register-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="register-label">
          FINAL TRANSMISSION // 001
        </p>

        <h2>
          ARE YOU READY
          <br />
          <span>TO EXECUTE THE HEIST?</span>
        </h2>

        <p className="register-description">
          The vault won't open itself. Gather your crew,
          sharpen your skills, and prepare to build
          something extraordinary.
        </p>

        {/* CTA BUTTON */}
        <a href="#" className="register-button">
          <span>JOIN THE HEIST</span>
          <span className="register-arrow">↗</span>
        </a>

        <p className="register-warning">
          // YOUR MISSION STARTS WITH A SINGLE CLICK
        </p>

      </motion.div>

      {/* DECORATIVE CORNERS */}
      <div className="register-corner register-corner-tl"></div>
      <div className="register-corner register-corner-tr"></div>
      <div className="register-corner register-corner-bl"></div>
      <div className="register-corner register-corner-br"></div>

    </section>
  );
}

export default Register;