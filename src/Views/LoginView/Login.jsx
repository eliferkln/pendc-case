import React from 'react'
import "./Login.css";
import Logo from "../../assets/Logo.png"
import LoginPng from "../../assets/login.png"

const Login = () => {
  return (
    <div className="container">
        <div className="right-container">
            <div className="logo">
                <img src={Logo} alt=''/>
                </div>
            <div className="login">
                <div className="login-top">
                    <h1>Pendc’ye Hoşgeldiniz</h1>
                    <p>
                    Kullanıcı bilgileriniz ile giriş yapabilirsiniz.
                    </p>
                    </div>
                    <div className="login-content">
                        <div className="mail">
                            <span>E-Posta Adresi</span>
                            <input placeholder='isminiz@mail.com'/>
                        </div>
                        <div className="pass">
                            <span >Şifreniz</span>
                            <input placeholder='Şifrenizi Giriniz'/>
                        </div>
                        <button>Giriş Yap</button>
                    </div>
                    <div className="login-footer">
                        <h5>Bilgilerinizi hatırlamıyor musunuz?
</h5> 
<h6>Şifremi Unuttum
    </h6>
    </div>
            </div>
        </div>
        <div className="left-container"> <img src={LoginPng} alt="" /></div>
        </div>
  )
}

export default Login