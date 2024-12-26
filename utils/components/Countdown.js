"use client";

import { useState, useEffect } from "react";

export default function Countdown({ expirationDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: null,
    hours: null,
    minutes: null,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const targetDate = new Date(
        expirationDate.split("-").reverse().join("-")
      );

      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(false);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft === false ? (
    <span className="text-uppercase h2 lh-1">gått ut</span>
  ) : (
    <div className="d-flex gap-4">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span className="m-0 h2 lh-1">{timeLeft.days}</span>
        <span className="text-uppercase fw-medium small">dagar</span>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span className="m-0 h2 lh-1">{timeLeft.hours}</span>
        <span className="text-uppercase fw-medium small">tim</span>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <span className="m-0 h2 lh-1">{timeLeft.minutes}</span>
        <span className="text-uppercase fw-medium small">min</span>
      </div>
    </div>
  );
}
