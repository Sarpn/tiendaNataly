import React, { useEffect, useState } from "react";
import "./shopping-car.css";

const ShoppingCar = ({ products }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const sellingProducts = products.filter(product => (product.onSellingUnits > 0));
        console.log({sellingProducts, products});
        setCart(sellingProducts);
    }, [products]);

  return (
    <div className="right-bar-fixed">
      <div className="shopping-car-title">
        <h2>Carrito de compras</h2>
      </div>
      <div className="shopping-car-content">
        {cart.map((product) => (
          <div key={product.id} className="shopping-car-product">
            <div className="shopping-car-product-title">
              {product.title || "<Sin nombre>"} {product.icon}
            </div>
            <div className="shopping-car-product-units">{product.onSellingUnits}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCar;
