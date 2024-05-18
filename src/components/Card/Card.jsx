import React from "react";
import "./Card.css";


const Card = ({card, heading, detail, color}) => {
  return (
    <div className="card mb-3" style={{width: "28rem"}}>
  <div className="row g-0">
    <div className="col-md-4" id="imgg">
      <img src={card} className="img-fluid rounded-start cd"  alt="..." style={{height: "11rem"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body cd-body">
        <h5 className="card-title" ><b>{heading}</b></h5>
        <p className="card-text">{detail}</p>
        
      </div>
    </div>
  </div>
</div>
  );
};

export default Card;