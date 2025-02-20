import React, { useEffect, useState } from "react";
import "./shopping-cart.css";
import CartItem from "../cart-item/cart-item";
import TotalSummary from "../total-summary/total-summary";

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
      {cart.length === 0 ? <div className="empty-cart">No hay productos en el carrito</div>
        : <>
          <div className="shopping-car-content">
            {cart.map(({ id, title, icon, onSellingUnits, price }) => (
              <CartItem key={id} title={title} icon={icon} onSellingUnits={onSellingUnits} price={price} />
            ))}
          </div>
          <TotalSummary products={cart} />
        </>
      }
    </div>
  );
};

export default ShoppingCart;
