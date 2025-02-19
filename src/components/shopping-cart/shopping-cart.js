import React, { useEffect, useState } from "react";
import "./shopping-cart.css";
import CartItem from "../cart-item/cart-item";

const ShoppingCart = ({ products }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const sellingProducts = products.filter(product => (product.onSellingUnits > 0))
        setCart(sellingProducts);
    }, [products]);

  return (
    <div className="right-bar-fixed">
      <div className="shopping-car-title">
        <h2>Carrito de compras</h2>
      </div>
      <div className="shopping-car-content">
        {cart.map(({id, title, icon, onSellingUnits, price}) => (
          <CartItem key={id} title={title} icon={icon} onSellingUnits={onSellingUnits} price={price} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
