import React, { useEffect } from "react";
import "./product-card.css";

const ProductCard = (props) => {

    useEffect(()=>{
        console.log(`Hola, la ${props.title} se está actualizando y hay ${props.units} productos añadidos`);
    },[props.units]);

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
      </div>
    </div>
  );
};
export default ProductCard;
