import React, { useEffect } from "react";
import "./cart-item.css";

const CartItem = ({ id, title, icon, onSellingUnits, price }) => {

  return (
    <div key={id} className="cartContainer">
      <div className="cartTitle">
        {title || "<Sin nombre>"} {icon} x <span className="cartUnits">{onSellingUnits}</span>
      </div>
      <div className="cartPrice">
        ${price * onSellingUnits}
      </div>
    </div>
  );
};

export default CartItem;
