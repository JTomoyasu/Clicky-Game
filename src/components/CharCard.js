import React from "react";
import "./CharCard.css"; 

const CharCard = props => (
  <div className="card" onClick={() => {props.scoreHandler(props.id);props.shuffle()}}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
    <div className="content">
    </div>
  </div>
);

export default CharCard;
