import "../css/prizes.css";

function Prizes() {
  const prizes = [
    {
      rank: "01",
      title: "FIRST PLACE",
      label: "THE MASTER HEIST",
      amount: "₹ XX,XXX",
      description: "The ultimate reward for the crew that executes the perfect heist.",
    },
    {
      rank: "02",
      title: "SECOND PLACE",
      label: "THE ELITE CREW",
      amount: "₹ XX,XXX",
      description: "A reward for extraordinary innovation and execution.",
    },
    {
      rank: "03",
      title: "THIRD PLACE",
      label: "THE BREAKTHROUGH",
      amount: "₹ X,XXX",
      description: "Recognizing a team that pushes boundaries and delivers.",
    },
  ];

  return (
    <section className="prizes-section" id="prizes">

      <div className="prizes-header">
        <p className="prizes-label">THE VAULT</p>

        <h2>
          CLAIM YOUR
          <span> REWARD.</span>
        </h2>

        <p className="prizes-subtitle">
          Execute the perfect heist. Earn your share.
        </p>
      </div>

      <div className="prizes-grid">
        {prizes.map((prize) => (
          <div className="prize-card" key={prize.rank}>

            <div className="prize-card-top">
              <span className="prize-rank">
                #{prize.rank}
              </span>

              <span className="prize-label">
                {prize.label}
              </span>
            </div>

            <div className="prize-card-content">
              <h3>{prize.title}</h3>

              <div className="prize-amount">
                {prize.amount}
              </div>

              <p>{prize.description}</p>
            </div>

            <div className="prize-card-bottom">
              <span className="prize-line"></span>
              <span>VAULT REWARD</span>
            </div>

          </div>
        ))}
      </div>

      <div className="prizes-footer">
        <p>MORE REWARDS. MORE OPPORTUNITIES. MORE AT STAKE.</p>
      </div>

    </section>
  );
}

export default Prizes;