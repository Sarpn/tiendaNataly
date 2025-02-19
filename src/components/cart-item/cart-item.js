import React, { useEffect } from "react";

const CartItem = ({id,title, icon, onSellingUnits, price}) => {

    return (<div key={id} className="shopping-car-product">
                <div className="shopping-car-product-title">
                {title || "<Sin nombre>"} {icon}
                </div>
                <div className="shopping-car-product-units">{onSellingUnits}</div>
            </div>);
}

export default CartItem;

