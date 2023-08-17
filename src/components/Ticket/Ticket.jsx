import React from 'react'
import "./Ticket.css";
import eye from "../../assets/eye.png";
import bg from "../../assets/balance-bg.png"
const Ticket = () => {
  return (
<div className="ticket-container" style={{backgroundImage:`url(${bg})`}}>
    <div className="ticket-right"> 
    <div className="ticket-right-top">
        Bakiyem 
    <img src={eye} alt=''/> 
    </div>
    <h3>₺******</h3>
    </div>
    <div className="ticket-left">
        <button>Bakiye Yükle</button>
    </div>
</div>
  )
}

export default Ticket