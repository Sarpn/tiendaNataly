import React, { useState } from "react";

const ShoppingCar = (props) => {
    return (
        <div className="shopping-car">
            <div className="shopping-car-title">
                <h2>Carrito de compras</h2>
            </div>
            <div className="shopping-car-content">
                {
                    props.products.map((product) => (
                        <div className="shopping-car-product">
                            <div className="shopping-car-product-title">
                                {product.title || "<Sin nombre>"} {product.icon}
                            </div>
                            <div className="shopping-car-product-units">
                                {product.units}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ShoppingCar;