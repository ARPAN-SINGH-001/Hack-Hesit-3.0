import { motion } from "motion/react";
import "../css/about.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* LEFT CONTENT */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="about-label">CLASSIFIED // MISSION 001</p>

        <h2>
          THIS IS NOT
          <br />
          <span>JUST A HACKATHON.</span>
        </h2>

        <p className="about-description">
          HackHeist is where brilliant minds come together to
          challenge the impossible. A battlefield of ideas,
          innovation, and technology where you don't just
          write code — you engineer the extraordinary.
        </p>

        <p className="about-description">
          Assemble your crew. Decode the challenges.
          Build something that changes the game.
          The ultimate heist awaits.
        </p>

        <div className="about-bottom-line">
          <span></span>
          <p>YOUR MISSION STARTS HERE</p>
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        className="about-visual"
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      >
        <div className="about-visual-frame">

          {/* Frame corners */}
          <span className="about-corner top-left"></span>
          <span className="about-corner top-right"></span>
          <span className="about-corner bottom-left"></span>
          <span className="about-corner bottom-right"></span>

          {/* Mission briefing visual */}
          <div className="about-visual-content">

            {/* System status */}
            <div className="about-status">
              <span className="status-dot"></span>
              SYSTEM ONLINE
            </div>

            {/* Target rings */}
            <div className="about-target">
              <div className="target-ring ring-1"></div>
              <div className="target-ring ring-2"></div>
              <div className="target-ring ring-3"></div>

              <div className="target-center">
                <span>H</span>
              </div>

              <div className="target-cross horizontal"></div>
              <div className="target-cross vertical"></div>
            </div>

            {/* Mission details */}
            <div className="about-visual-info">
              <p className="visual-code">OPERATION HH-2026</p>
              <h3>THE HEIST</h3>
              <p>MISSION STATUS: AWAITING EXECUTION</p>
            </div>

            {/* Scanning effect */}
            <div className="about-scan-line"></div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default About;