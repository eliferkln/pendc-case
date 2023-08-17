import React from 'react'
import "./Container.css";
import Card from '../Card/Card';
import dashboard from "../../assets/product.png"
import product from "../../assets/order.png"
import ticket from "../../assets/ticket.png"

const Container = () => {
  return (
   <div className="container-dashboard">
    <div className="right-content">
      <div className="card-container">
        <Card png={dashboard} desc={"32 Aktif"}  title={"Aktif Ürün Sayısı"} show={false}/>
        <Card png={product} desc={"3 Aktif"}  title={"Aktif Sipariş Sayısı"} show={true}/>
        <Card png={ticket} desc={"1 Aktif"}  title={"Bekleyen Ticket"} show={false}/>
      </div>
      <div className="graphic"></div>
      <div className="table"></div>
      </div>
    <div className="left-content">deneme</div>
   </div>
  )
}

export default Container