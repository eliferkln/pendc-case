import React from 'react'
import "./Graphic.css";
import arrow from "../../assets/navbar/arrow down.png"

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
    <div className="graphic-container"></div>
</div>
  )
}

export default Graphic