import React, { useEffect } from "react";
import "./product-card.css";

const ProductCard = ({
  addProduct,
  description,
  icon,
  id,
  onSellingUnits,
  removeProduct,
  title,
  units,
}) => {
  return (
    <div className={`card ${units > 0 ? "available" : "not-available"}`}>
      <div className="cardTitle">
        {title || "<Sin nombre>"} {icon}
      </div>

      <div>{description || "<Sin description>"} </div>
      <h4>Disponibles: {units}</h4>
      <div className="cardButtons">
        <button
          className="btn"
          onClick={() => {
            removeProduct(id);
          }}
        >
          -
        </button>
        <p>{onSellingUnits}</p>
        <button
          className="btn"
          onClick={() => {
            addProduct(id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
