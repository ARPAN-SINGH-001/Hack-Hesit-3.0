import { motion } from "motion/react";
import "../css/organizers.css";

function Organizers() {
  const team = [
    {
      name: "YOUR NAME",
      role: "Lead Organizer",
      image: "/Past-Heist/The-Crew.jpg",
      number: "01",
      instagram: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "TEAM MEMBER",
      role: "Co-Organizer",
      image: "/assets/organizer2.jpg",
      number: "02",
      instagram: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "TEAM MEMBER",
      role: "Technical Lead",
      image: "/assets/organizer3.jpg",
      number: "03",
      instagram: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "TEAM MEMBER",
      role: "Design Lead",
      image: "/assets/organizer4.jpg",
      number: "04",
      instagram: "#",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section className="organizers" id="organizers">

      {/* Background atmosphere */}
      <div className="organizers-glow"></div>

      {/* Section Header */}
      <div className="organizers-header">

        <motion.div
          className="organizers-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="organizers-label">
            PERSONNEL FILES / THE CREW
          </span>

          <h2>
            THE PEOPLE
            <br />
            BEHIND THE <span>PLAN.</span>
          </h2>
        </motion.div>

        <motion.p
          className="organizers-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Every successful heist requires a mastermind.
          Meet the people working behind the scenes
          to make HackHeist happen.
        </motion.p>

      </div>

      {/* Organizer Cards */}
      <div className="organizers-grid">

        {team.map((member, index) => (
          <motion.div
            className="organizer-card"
            key={member.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >

            {/* Image */}
            <div className="organizer-image">

              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
              />

              <span className="organizer-number">
                FILE / {member.number}
              </span>

              <div className="organizer-image-overlay"></div>

              <div className="organizer-view">
                ↗
              </div>

            </div>

            {/* Details */}
            <div className="organizer-details">

              <div className="organizer-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              {/* Social Links */}
              <div className="organizer-socials">

                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} Instagram`}
                >
                  IG
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  IN
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} GitHub`}
                >
                  GH
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Organizers;