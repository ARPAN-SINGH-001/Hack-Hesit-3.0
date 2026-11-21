import { useState, useEffect } from "react";

import '../css/countDown.css'

function CountDown() {
  const targetDate = new Date("2027-01-26T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <section className="countdown-section">
    
    <div className="countdown-heading">
      <span className="countdown-line"></span>

      <p>THE HEIST BEGINS IN</p>

      <span className="countdown-line"></span>
    </div>

    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <p>DAYS</p>
      </div>

      <div className="countdown-item">
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
        <p>HOURS</p>
      </div>

      <div className="countdown-item">
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <p>MINUTES</p>
      </div>

      <div className="countdown-item">
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <p>SECONDS</p>
      </div>
    </div>
  </section>
);
}

export default CountDown;