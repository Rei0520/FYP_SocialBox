"use client";

import { useState } from "react";
import "./page.css";

export const CreatorDashboard = () => {
  const [tab, setTab] = useState(0);
  const tabs = ["Body", "Hats", "Background"];
  const temp = [
    "Body",
    "Hats",
    "Background",
    "Body",
    "Hats",
    "Background",
    "Body",
    "Hats",
  ];

  const Card = () => {
    return <div className="dashboard_card"></div>;
  };

  return (
    <div className="dashboard">
      <div className="flex">
        {tabs.map((t, index) => (
          <div
            onClick={() => setTab(index)}
            className={
              index === tab ? "dashboard_tab_selected" : "dashboard_tab "
            }
          >
            {t}
          </div>
        ))}
      </div>
      <hr />
      <div className="dashboard_container flex">
        {temp.map(() => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;
