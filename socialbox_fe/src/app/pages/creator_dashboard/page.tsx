"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { img } from "@/app/assets";

export const CreatorDashboard = () => {
  const [tab, setTab] = useState(0);
  const [assets, setAssets] = useState(
    JSON.parse(localStorage.getItem("assets"))
  );

  useEffect(() => {
    try {
      setAssets(JSON.parse(localStorage.getItem("assets")));
    } catch (error) {}
  }, [tab]);
  const tabs = ["Body", "Hats", "Background", "Mouth", "Eyes"];

  interface cardProps {
    name: string;
    type: string;
    description: string;
    url: any;
  }

  const Card = ({ url, name, description, type }: cardProps) => {
    console.log(type === tabs[tab]);
    console.log(type);

    // type === tabs[tab] ? (
    return type === tabs[tab] ? (
      <div key={name} className="dashboard_card">
        <Image
          className="dashboard_img"
          width={100}
          height={100}
          src={url}
          alt={name}
        />
        <div className="dashboard_img_title">{name}</div>
      </div>
    ) : (
      <></>
    );
    // ) : (
    //   <></>
    // );
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
        {assets?.map(({ name, description, url, type }: any) => (
          <Card name={name} url={img.preview} type={type} />
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;
