import React from "react";
import "./ProgressStatsCard.css";

function ProgressStatsCard() {
  return (
    <div className="progress-stats-card">
      <h2>Progress statistics</h2>
      <p>
        64% <span>Total activity</span>
      </p>
      <div className="stats">
        <div>8 In Progress</div>
        <div>2 Completed</div>
        <div>14 Upcoming</div>
      </div>
    </div>
  );
}

export default ProgressStatsCard;
