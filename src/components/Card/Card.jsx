import React from 'react'
import "./Card.css";

const Card = ({png, title, desc, show}) => {
  return (
<div className="card">
    <img src={png} alt=''/>
    <div className="card-desc">
        <p> {title} </p>
        <h4>{desc} </h4>
       {show === true && <button>Şimdi Öde</button>} 
    </div>
</div>
  )
}

export default Card