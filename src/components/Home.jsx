import React from "react";
import transition from "../transition";
import "./home.css";
import { LineChart } from "@mui/x-charts/LineChart";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Dashboard</h1>
      <div className="card">
        <h2 className="card-title">Earnings overview</h2>

        <LineChart
          sx={{
            "& .MuiLineElement-root": {
              strokeWidth: 4,
              stroke: "#3741d8",
            },

            "& .MuiMarkElement-root": {
              stroke: "#3741d8",
            },
          }}
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default transition(Home);
