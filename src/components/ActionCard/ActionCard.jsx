import React from 'react'
import "./ActionCard.css";
import AddTicket from "../../assets/add-ticket.png";
import AddVisit from "../../assets/add-visit.png";
import AddCargo from "../../assets/add-cargo.png";

const ActionCard = () => {
  return (
<div className="action-card">
    <div className="action-card-container"> <div className="item">
         <img src={AddTicket} alt=''/>
          <p>Ticket Oluştur</p>
          </div>
    <div className="item">
    <img src={AddVisit} alt=''/>
          <p>Ziyaretler</p>
    </div>
    <div className="item">
    <img src={AddCargo} alt=''/>
          <p>Kargolar</p>
    </div></div>
   
</div>
  )
}

export default ActionCard