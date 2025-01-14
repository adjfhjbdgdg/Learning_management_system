import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Attendance.css";

const participantsData = [
  {
    id: 1,
    name: "Amanda Beteille",
    payment: "Not-Marked",
    amount: "12pm-13pm",
    attendance: "Booked",
  },
  {
    id: 2,
    name: "Andy",
    payment: "Not-Marked",
    amount: "12pm-13pm",
    attendance: "Booked",
  },
  {
    id: 3,
    name: "Brenda Miller",
    payment: "Not-Marked",
    amount: "12pm-13pm",
    attendance: "Booked",
  },
];

function App() {
  const [participants, setParticipants] = useState(participantsData);

  const handleAttendanceChange = (id, status) => {
    const updatedParticipants = participants.map((participant) => {
      if (participant.id === id) {
        return {
          ...participant,
          attendance: status,
          payment:
            status === "Checked-In"
              ? "Present"
              : status === "No-Show"
              ? "Absent"
              : "Not-Marked",
        };
      }
      return participant;
    });

    setParticipants(updatedParticipants);
  };

  return (
    <div className="container">
      <h1>Class A</h1>
      <p>Friday, May 8, 12:00pm to 1:30pm · with Lisa Meadows</p>

      <div className="email-section">
        <button>Email All Participants</button>
      </div>

      <table className="participants-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Attendance Status</th>
            <th>Timings</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.id}>
              <td>{participant.name}</td>
              <td>
                <span className="badge">{participant.payment}</span>
              </td>
              <td>{participant.amount}</td>
              <td>
                <select
                  value={participant.attendance}
                  onChange={(e) =>
                    handleAttendanceChange(participant.id, e.target.value)
                  }
                >
                  <option value="Booked">Not Marked</option>
                  <option value="Checked-In">Present</option>
                  <option value="No-Show">Absent</option>
                </select>
              </td>
            </tr>
          ))}
          <button type="button" class="btn btn-danger">
            Submit
          </button>
        </tbody>
      </table>
    </div>
  );
}

export default App;
