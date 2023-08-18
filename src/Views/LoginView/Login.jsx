import React from 'react'
import "./Login.css";
import Logo from "../../assets/Logo.png"
import LoginPng from "../../assets/login.png"

const Login = ({setShow}) => {
  return (

<div className="container">
    <div className="wrapper">
        <div className="left">
   
            <div className="login-form">
               <div className="logo">
                <img src={Logo} alt=''/>
                </div>
                <div className="login">
                <h1>Pendc’ye Hoşgeldiniz</h1>
                    <p>
                   Kullanıcı bilgileriniz ile giriş yapabilirsiniz.
                    </p>
                    <div className="mail">
                             <span>E-Posta Adresi</span>
                             <input placeholder='isminiz@mail.com'/>
                        </div>
                         <div className="pass">
                             <span >Şifreniz</span>
                             <input placeholder='Şifrenizi Giriniz'/>
                        </div>
                         <button onClick={()=>setShow(true)}>Giriş Yap</button>
                         <div className="login-footer">
                        <h5>Bilgilerinizi hatırlamıyor musunuz?
 </h5> 
 <h6>Şifremi Unuttum
     </h6>
     </div>
                </div>
            </div>
        </div>
        <div className="right" ><div className="bg" style={{backgroundImage:`url(${LoginPng})`}}></div></div>
    </div>
    
 </div>

  )
}

export default Login