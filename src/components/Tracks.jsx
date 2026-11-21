import { motion } from "motion/react";

import {
  BrainCircuit,
  Blocks,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Lightbulb,
} from "lucide-react";

import "../css/tracks.css";

function Tracks() {
  const tracks = [
    {
      number: "01",
      title: "AI / ML",
      icon: BrainCircuit,
      description:
        "Develop intelligent, data-driven solutions that address complex real-world challenges. Explore machine learning models, predictive analytics, computer vision, natural language processing, and generative AI to build applications that enhance automation, decision-making, and problem-solving. ",
    },
    {
      number: "02",
      title: "WEB3 & BLOCKCHAIN",
      icon: Blocks,
      description:
        "Explore the potential of decentralised technologies to transform digital interactions. Develop smart contracts, blockchain-based applications, secure transaction systems, and decentralised platforms that promote transparency, trust, digital ownership, and innovation. ",
    },
    {
      number: "03",
      title: "CYBERSECURITY",
      icon: ShieldCheck,
      description:
        "Address emerging digital threats through innovative security solutions. Identify system vulnerabilities, strengthen data protection, develop threat-detection mechanisms, and design secure architectures that safeguard digital infrastructure, networks, and sensitive information. ",
    },
    {
      number: "04",
      title: "FINTECH",
      icon: TrendingUp,
      description:
        "Transform financial services through technology-driven innovation. Build intelligent payment systems, digital banking solutions, financial analytics tools, and automated platforms that improve transaction efficiency, accessibility, security, and financial inclusion.",
    },
    {
      number: "05",
      title: "IoT & HARDWARE",
      icon: Cpu,
      description:
        "Create intelligent hardware solutions that connect devices, systems, and environments. Explore sensor networks, embedded systems, edge computing, and smart automation to develop practical applications that enhance connectivity, efficiency, and real-world experiences. ",
    },
    {
      number: "06",
      title: "OPEN INNOVATION",
      icon: Lightbulb,
      description:
        "Explore ideas beyond predefined technological domains and develop solutions to meaningful real-world challenges. Combine creativity, emerging technologies, and interdisciplinary approaches to build innovative applications, impactful products, and scalable solutions.",
    },
  ];

  return (
    <section className="tracks-section" id="tracks">

      {/* SECTION HEADER */}
      <motion.div
        className="tracks-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="tracks-label">CHOOSE YOUR OPERATION</p>

        <h2>
          SELECT YOUR
          <span> MISSION.</span>
        </h2>

        <p className="tracks-subtitle">
          Six paths. Infinite possibilities. One ultimate heist.
        </p>
      </motion.div>

      {/* TRACK CARDS */}
      <div className="tracks-grid">
        {tracks.map((track, index) => {
          const Icon = track.icon;

          return (
            <motion.div
              className="track-card"
              key={track.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >

              <div className="track-card-top">
                <span className="track-number">{track.number}</span>

                <span className="track-status">
                  AVAILABLE
                </span>
              </div>

              <div className="track-icon-wrapper">
                <Icon
                  className="track-icon"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>

              <div className="track-card-content">
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </div>

              <div className="track-card-bottom">
                <span className="track-line"></span>
                <span className="track-access">
                  ACCESS MISSION
                </span>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

export default Tracks;