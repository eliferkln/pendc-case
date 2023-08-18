
import { useState } from 'react';
import Logo from "../../assets/Logo.png"
import "./Navbar.css";
import menu from "../../assets/navbar/dashboard.png"
import menu1 from "../../assets/navbar/stocks.png"
import menu2 from "../../assets/navbar/clipboard.png"
import menu3 from "../../assets/navbar/orders.png"
import menu4 from "../../assets/navbar/products.png"
import menu5 from "../../assets/navbar/chat.png"
import menu6 from "../../assets/navbar/credit-card.png"
import avatar from "../../assets/navbar/Avatar.png"
import arrow from "../../assets/navbar/arrow down.png"

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);


    return(
        <div className="nav">
                 <div className="logo-nav">
                    <img src={Logo} alt=""/>
                </div>
            <div className="navigation">

                <ul>
                    <li> <img src={menu} alt=""/ > Ana Menü</li>
                    <li>  <img src={menu1} alt=""/> Stoklar</li>
                    <li>  <img src={menu4} alt=""/> Ürünler</li>
                    <li>  <img src={menu3} alt=""/> Siparişler</li>
                    <li>  <img src={menu2} alt=""/> Teklifler</li>
                    <li>  <img src={menu5} alt=""/> Ticket</li>
                    <li>  <img src={menu6} alt=""/> Finans  <img src={arrow} alt=""/></li>
                   

                    
                </ul>
             
            </div>
            <div className="user">  <img src={avatar} alt=""/> <div className="desc">
                    Burak Güneş<br/> <p> Pentech Bilişim</p>    </div>   <img src={arrow} alt=""/></div>

            <style jsx>{`

           @media (max-width: 1200px){
         

                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: #FD7E0D;
                        height: 100vh;
                        width: 50%;
                        margin-top: 50px;
                        position: fixed;
                        

                    }
                }
                
               
                
            `}</style>
        </div>
    )

}
export default Navbar