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
        "Harness artificial intelligence and machine learning to develop intelligent solutions that tackle real-world challenges.",
    },
    {
      number: "02",
      title: "WEB3 & BLOCKCHAIN",
      icon: Blocks,
      description:
        "Explore decentralized technologies, smart contracts, and blockchain-powered solutions that redefine the digital world.",
    },
    {
      number: "03",
      title: "CYBERSECURITY",
      icon: ShieldCheck,
      description:
        "Protect digital infrastructure, identify vulnerabilities, and engineer innovative solutions to emerging security threats.",
    },
    {
      number: "04",
      title: "FINTECH",
      icon: TrendingUp,
      description:
        "Reimagine financial technology through smarter payment systems, digital finance, and innovative financial solutions.",
    },
    {
      number: "05",
      title: "IoT & HARDWARE",
      icon: Cpu,
      description:
        "Bridge the physical and digital worlds through connected devices, embedded systems, and intelligent hardware.",
    },
    {
      number: "06",
      title: "OPEN INNOVATION",
      icon: Lightbulb,
      description:
        "Break boundaries, challenge conventions, and transform your boldest ideas into something extraordinary.",
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