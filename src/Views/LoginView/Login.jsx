import React, { useState } from 'react';
import "./Login.css";
import Logo from "../../assets/Logo.png";
import LoginPng from "../../assets/login.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setShow}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123") {
      setShow(true);
    } else {
        setShow(false)
        toast.error('Error !', {
            position: toast.POSITION.TOP_CENTER
        });
    }
  };

  return (
    <div className="container">
        <ToastContainer />
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
                <input placeholder='isminiz@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="pass">
                <span>Şifreniz</span>
                <input type="password" placeholder='Şifrenizi Giriniz' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button onClick={handleLogin}>Giriş Yap</button>
              <div className="login-footer">
                <h5>Bilgilerinizi hatırlamıyor musunuz?</h5>
                <h6>Şifremi Unuttum</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bg" style={{backgroundImage:`url(${LoginPng})`}}></div>
        </div>
      </div>
    </div>
  )
}

export default Login;
