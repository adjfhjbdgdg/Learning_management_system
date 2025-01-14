import React from "react";
import "./ScheduleCard.css";

function ScheduleCard() {
  return (
    <div className="schedule-card">
      <h2>My Schedule</h2>
      <div className="schedule-item">
        <p>10:30 - 12:00</p>
        <p>Technical English for Beginners</p>
      </div>
      <div className="schedule-item">
        <p>13:00 - 14:00</p>
        <p>English punctuation made easy</p>
      </div>
      <div className="schedule-item">
        <p>16:00 - 17:00</p>
        <p>Technical Spanish for Beginners</p>
      </div>
    </div>
  );
}

export default ScheduleCard;
