import React, { useState } from "react";
import "./product-card.css";

const ProductCard = (props) => {

    const [selling, setSelling] = useState(0);

    const addProduct = () => {
        setSelling(selling + 1);
        props.setProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === props.id) {
                    return {
                        ...product,
                        units: product.units - 1
                    }
                }
                return product;
            })
        });
    }

    const removeProduct = () => {
        setSelling(selling - 1);
        props.setProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === props.id) {
                    return {
                        ...product,
                        units: product.units + 1
                    }
                }
                return product;
            })
        });
        
    }

  return (
    <div className={`card ${props.units > 0 ? "available" : "not-available"}`}>
      <div className="cardTitle">
        {props.title || "<Sin nombre>"} {props.icon}
      </div>

      <div>{props.description || "<Sin description>"} </div>
      <h4>Disponibles: {props.units}</h4>
      <div className="cardButtons">
      <button className="btn" onClick={removeProduct}>-</button>
      <div>{selling}</div>
      <button className="btn" onClick={addProduct} >+</button>
        {props.units}
        
      </div>
    </div>
  );
};
export default ProductCard;
