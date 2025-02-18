import React, { useState } from "react";
import "./product-card.css";

const ProductCard = (props) => {

    const [unitsSelling, setUnitsSelling] = useState(0);

  return (
    <div className={`card ${props.units > 0 ? "available" : "not-available"}`}>
      <div className="cardTitle">
        {props.title || "<Sin nombre>"} {props.icon}
      </div>

      <div>{props.description || "<Sin description>"} </div>
      <h4>Disponibles: {props.units}</h4>
      <div className="cardButtons">
      <button className="btn" onClick={() => {props.removeProduct(props.id)}}>-</button>
      
      <button className="btn" onClick={() => {props.addProduct(props.id)}} >+</button>
        {props.units}
        
      </div>
    </div>
  );
};
export default ProductCard;
