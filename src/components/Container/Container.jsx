import React from 'react'
import "./Container.css";
import Card from '../Card/Card';
import dashboard from "../../assets/product.png"
import product from "../../assets/order.png"
import ticketpng from "../../assets/ticket.png"
import Ticket from '../Ticket/Ticket';
import ActionCard from '../ActionCard/ActionCard';
import ElectriCard from '../ElectriCard/ElectriCard';
import TicketListCard from '../TicketListCard/TicketListCard';
import Graphic from '../Graphic/Graphic';



const Container = () => {
  return (
    <div className="containerr">   <div className="container-dashboard">
    <div className="right-content">
      <div className="card-container">
        <Card png={dashboard} desc={"32 Aktif"}  title={"Aktif Ürün Sayısı"} show={false}/>
        <Card png={product} desc={"3 Aktif"}  title={"Aktif Sipariş Sayısı"} show={true}/>
        <Card png={ticketpng} desc={"1 Aktif"}  title={"Bekleyen Ticket"} show={false}/>
      </div>
      <Graphic/>
    <TicketListCard/>
      </div>
    <div className="left-content">
  <Ticket/>
  <ActionCard/>
 <ElectriCard/>
      </div>
   </div></div>

  )
}

export default Container