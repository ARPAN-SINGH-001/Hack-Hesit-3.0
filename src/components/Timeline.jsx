import { motion } from "motion/react";
import "../css/timeline.css";

function Timeline() {
  const events = [
    {
      date: "01",
      time: "09:00 AM",
      title: "REGISTRATION & ENTRY",
      description:
        "The crew assembles. Participants register, form teams, and prepare for the operation.",
      status: "INITIALIZING",
    },
    {
      date: "02",
      time: "10:00 AM",
      title: "OPENING CEREMONY",
      description:
        "Mission briefing begins. Rules, challenges, and objectives are revealed.",
      status: "MISSION BRIEFING",
    },
    {
      date: "03",
      time: "11:00 AM",
      title: "HACKING BEGINS",
      description:
        "The vault is open. Teams begin building their solutions and executing their plans.",
      status: "OPERATION ACTIVE",
    },
    {
      date: "04",
      time: "NEXT DAY",
      title: "SUBMISSION DEADLINE",
      description:
        "Time is running out. Teams finalize their projects and submit their work.",
      status: "FINAL COUNTDOWN",
    },
    {
      date: "05",
      time: "FINAL STAGE",
      title: "JUDGING & EVALUATION",
      description:
        "The best crews present their innovations before the jury.",
      status: "UNDER REVIEW",
    },
    {
      date: "06",
      time: "GRAND FINALE",
      title: "WINNERS ANNOUNCED",
      description:
        "The operation concludes. Outstanding teams claim their rewards.",
      status: "MISSION COMPLETE",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">

      {/* SECTION HEADER */}
      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="timeline-label">OPERATION PROTOCOL</p>

        <h2>
          THE PLAN.
          <span> THE EXECUTION.</span>
        </h2>

        <p className="timeline-subtitle">
          Every second counts. Here's how the operation unfolds.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="timeline-container">

        {/* CENTRAL LINE */}
        <div className="timeline-line"></div>

        {events.map((event, index) => (
          <motion.div
            className={`timeline-event ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={event.date}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            {/* TIMELINE NODE */}
            <div className="timeline-node">
              <span>{event.date}</span>
            </div>

            {/* EVENT CARD */}
            <div className="timeline-card">

              <div className="timeline-card-top">
                <span className="timeline-time">{event.time}</span>
                <span className="timeline-status">{event.status}</span>
              </div>

              <h3>{event.title}</h3>

              <p>{event.description}</p>

              <div className="timeline-card-bottom">
                <span className="timeline-card-line"></span>
                <span>MISSION LOG {event.date}</span>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* FOOTER */}
      <div className="timeline-footer">
        <span className="timeline-footer-line"></span>
        <p>THE SUCCESS OF THE MISSION DEPENDS ON YOU.</p>
        <span className="timeline-footer-line"></span>
      </div>

    </section>
  );
}

export default Timeline;