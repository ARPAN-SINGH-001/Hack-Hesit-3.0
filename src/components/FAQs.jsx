import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "../css/faqs.css";

function FAQs() {
  const faqData = [
    {
      question: "WHAT IS HACKHEIST?",
      answer:
        "HackHeist is a hackathon where innovators, developers, designers, and problem-solvers come together to turn bold ideas into real-world solutions. Get your crew together, think outside the box, and prepare for the ultimate heist of innovation.",
    },
    {
      question: "WHO CAN PARTICIPATE?",
      answer:
        "Students, developers, designers, and tech enthusiasts who are passionate about building innovative solutions are welcome to participate. Detailed eligibility criteria will be announced soon.",
    },
    {
      question: "CAN I PARTICIPATE SOLO?",
      answer:
        "HackHeist is designed to encourage teamwork and collaboration. Team formation guidelines, including the minimum and maximum team size, will be announced soon.",
    },
    {
      question: "WHAT ARE THE HACKATHON TRACKS?",
      answer:
        "Participants can build solutions across six tracks: AI / ML, Web3 & Blockchain, Cybersecurity, FinTech, IoT & Hardware, and Open Innovation.",
    },
    {
      question: "DO I NEED TO HAVE A TEAM BEFORE REGISTERING?",
      answer:
        "Team formation guidelines and registration details will be announced soon. Stay tuned to our official channels for updates.",
    },
    {
      question: "WHAT SHOULD I BRING?",
      answer:
        "Bring your laptop, chargers, essential accessories, your creativity, and the determination to build something extraordinary. Additional event requirements will be shared before the hackathon.",
    },
    {
      question: "HOW WILL PROJECTS BE JUDGED?",
      answer:
        "Projects will be evaluated based on criteria such as innovation, technical implementation, problem-solving, usability, and presentation. The final judging criteria will be announced by the organizing team.",
    },
    {
      question: "WILL THERE BE PRIZES?",
      answer:
        "Absolutely! The best teams will compete for exciting prizes, recognition, and the opportunity to showcase their innovations. Prize details will be revealed soon.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <section className="faqs" id="faqs">

      {/* Background effects */}
      <div className="faqs-glow"></div>

      {/* Section header */}
      <div className="faqs-header">

        <motion.div
          className="faqs-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="faqs-label">
            INTEL BRIEFING / FAQ
          </span>

          <h2>
            GOT QUESTIONS?
            <br />
            <span>WE HAVE ANSWERS.</span>
          </h2>
        </motion.div>

        <motion.p
          className="faqs-description"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Before you join the operation, get familiar
          with the details. Everything you need to
          know before the heist begins.
        </motion.p>

      </div>

      {/* FAQ List */}
      <div className="faqs-container">

        {faqData.map((faq, index) => (
          <motion.div
            className={`faq-item ${
              activeIndex === index ? "faq-active" : ""
            }`}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >

            {/* Question */}
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >

              <span className="faq-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="faq-question-text">
                {faq.question}
              </span>

              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>

            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}

      </div>

      {/* Bottom note */}
      <motion.div
        className="faqs-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="faqs-bottom-line"></span>

        <p>
          STILL HAVE QUESTIONS? CONTACT THE CREW.
        </p>

        <span className="faqs-bottom-line"></span>
      </motion.div>

    </section>
  );
}

export default FAQs;