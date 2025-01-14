import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Percentage of Student Attendance</h3>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <PieChart />
      </div>

      <p></p>
      <h3>Student Attendance</h3>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <BarChart />
      </div>
    </div>
  );
};

export default App;
