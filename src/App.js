import React from "react";
import MyChart from "./components/MyChart";
import MyLineChart from "./components/MyLineChart";
import MyPieChart from "./components/MyPieChart";
import Header from "./components/Header";
import './App.css';

const App = () => {
  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 300 },
    { name: "Apr", value: 400 },
    { name: "May", value: 500 },
  ];

  const lineData = [
    { name: 'Jan', uv: 400, pv: 240 },
    { name: 'Feb', uv: 300, pv: 220 },
    { name: 'Mar', uv: 280, pv: 200 }
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="chart-container">
        <MyChart data={data} />
        <MyLineChart data={lineData} />
        <MyPieChart data={pieData} />
      </div>
    </div>
  );
};

export default App;
