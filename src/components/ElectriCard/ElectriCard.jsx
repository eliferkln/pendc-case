import React from 'react'
import "./ElectriCard.css";
import Electricpng from "../../assets/electric.png"
import arrow from "../../assets/navbar/arrow down.png"

const ElectriCard = () => {
  return (
   <div className="electri-card">
    <div className="electric-header">
        <div className="electric-item">  <img alt='' src={Electricpng}/>
        <h3>Elektrik Tüketimi</h3></div>
      
        <div className="electric-section">
            <p>2023-4</p>
            <img alt='' src={arrow}/>
        </div>
    </div>
    <div className="electric-top">
        <ul>
            <li>Kabin</li>
            <li>Hat</li>
            <li>Port</li>
            <li>Tüketim (KW/H)</li>
        </ul>
    </div>
    <div className="electric-table">
    <ul>
            <li>B2-K01</li>
            <li>M-UPS</li>
            <li>Toplam</li>
            <li>839.94</li>
        </ul>
    </div>
    <div className="electric-table">
    <ul>
            <li>B2-K02</li>
            <li>K-UPS</li>
            <li>Toplam</li>
            <li>330.00</li>
        </ul>
    </div>
    <div className="electric-table">
    <ul>
            <li>B2-K05</li>
            <li>K-UPS</li>
            <li>Toplam</li>
            <li>554.62</li>
        </ul>
    </div>
    <div className="electric-table">
    <ul>
            <li>B2-K06</li>
            <li>M-UPS</li>
            <li>Toplam</li>
            <li>81.91</li>
        </ul>
    </div>
    <div className="electric-table">
    <ul>
    <li>B2-K06</li>
            <li>M-UPS</li>
            <li>Toplam</li>
            <li>81.91</li>
        </ul>
    </div>

    <div className="electric-table">
    <ul>
    <li>B2-K06</li>
            <li>M-UPS</li>
            <li>Toplam</li>
            <li>81.91</li>
        </ul>
    </div>
    <div className="electric-footer">
  <h3> Genel Toplam: 5.835,53 KW/h</h3>  
   <p> Veriler 15 dk. gecikmelidir.</p> 
    </div>
   </div>
  )
}

export default ElectriCard