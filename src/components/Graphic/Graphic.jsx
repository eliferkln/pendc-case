import React from 'react'
import "./Graphic.css";
import arrow from "../../assets/navbar/arrow down.png"
import { Chart } from "react-google-charts";

export const data = [
    ["Min: 150.446 kbit/s", "kbit", "kbit/s"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
  export const options = {
    title: "Max: 378.219 kbit/s",
    hAxis: { title: "Min: 150.446 kbit/s", titleTextStyle: { color: " #5BC4BF41" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "70%", height: "70%" },
  };

const Graphic = () => {
  return (
<div className="graphic">
    <div className="graphic-header">
    <div className="graphic-section">
            <p>Port Kullanım Bilgisi</p>
            <img alt='' src={arrow}/>
        </div>
        <div className="graphic-list">
        <ul>
            <li>Canlı</li>
            <li>2 Saat</li>
            <li>48 Saat</li>
            <li>1 Ay</li>
            <li>1 Yıl</li>
        </ul>
        </div>
    </div>
    <div className="graphic-container">
    <Chart
      chartType="AreaChart"
      width="100%"
      height="280px"
      data={data}
      options={options}
    />
    </div>
</div>
  )
}

export default Graphic