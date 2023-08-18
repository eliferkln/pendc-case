import React from 'react'
import "./TicketListCard.css";
import arrow from "../../assets/arrow-right.png"
import chat from "../../assets/ticket.png"

const TicketListCard = () => {
  return (
    <div className="ticket-card-list">
      <div className="ticket-card-list-header">
        <h2>Ticket Listesi</h2>
<p> Tümünü Gör
   <img alt='' src={arrow}/>
   </p>
      </div>
      <div className="ticket-table-container">
      <div className="ticket-card-list-top">
      <ul>
            <li>Ticket Detayı</li>
            <li>Tarih</li>
            <li>Öncelik</li>
            <li>Durum</li>
        </ul>
      </div>
      <div className="ticket-card-list-table">
      <ul>
            <li><img alt='' src={chat}/></li>
            <li>Sunucu Problemleri Hakkında... <p> Ticket No: #3519</p> </li>
            <li> <p>27.04.2023 | 21:50
              </p></li>
            <li> <h1>Yüksek </h1></li>
            <li> <span>Yanıt Bekleniyor
              </span></li>
        </ul>
      </div>
      <div className="ticket-card-list-table">
      <ul>
            <li><img alt='' src={chat}/></li>
            <li>Aktarım Sorunların Hakkında  ... <p> Ticket No: #232104</p> </li>
            <li> <p>04.04.2023 | 10:00
              </p></li>
            <li> <h2>Düşük </h2></li>
            <li> <span>Yanıt Bekleniyor
              </span></li>
        </ul>
      </div></div>
    
    </div>
  )
}

export default TicketListCard