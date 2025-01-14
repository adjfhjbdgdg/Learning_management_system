import React from "react";
import "./ActivityCard.css";

function ActivityCard() {
  return (
    <div className="activity-card">
      <h2>Activity</h2>
      <p>
        24.9 <span>Hours spent</span>
      </p>
      {/* Add chart and other details here */}
      <div className="platform-stats">
        <p>By platform</p>
        <div className="platform-item">Mondly Platform - 12.5h</div>
        <div className="platform-item">Zoom - 6.8h</div>
        <div className="platform-item">Google Meet - 4.2h</div>
        <div className="platform-item">Skype - 2.5h</div>
      </div>
    </div>
  );
}

export default ActivityCard;
