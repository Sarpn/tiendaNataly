import React, { useState } from "react";
import ProductCard from "../product-card/product-card";
import "./sell-module.css";
import Header from "../header/header";
import ShoppingCart from "../shopping-cart/shopping-cart";

const SellModule = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Cereza",
            description:
            "Cerezas rojas deliciosas, perfectas para postres y ensaladas de frutas.",
            units: 10,
            onSellingUnits: 0,
            price: 500,
            icon: "🍒",
        },
        {
            id: 2,
            title: "Fresa",
            description:
            "Fresas frescas, ideales para batidos, postres y como snack saludable.",
            units: 15,
            onSellingUnits: 0,
            price: 300,
            icon: "🍓",
        },
        {
            id: 3,
            title: "Mango",
            description:
            "Mangos dulces, jugosos y llenos de sabor tropical, perfectos para ensaladas y jugos.",
            units: 0,
            onSellingUnits: 0,
            price: 400,
            icon: "🥭",
        },
        {
            id: 4,
            title: "Manzana",
            description:
            "Manzanas crujientes, excelentes para comer solas o en ensaladas.",
            units: 20,
            onSellingUnits: 0,
            price: 200,
            icon: "🍎",
        },
        {
            id: 5,
            title: "Banana",
            description:
            "Plátanos maduros, ideales para batidos, postres y como snack energético.",
            units: 25,
            onSellingUnits: 0,
            price: 300,
            icon: "🍌",
        },
        {
            id: 6,
            title: "Uva",
            description:
            "Uvas jugosas, perfectas para comer solas o añadir a ensaladas de frutas.",
            units: 0,
            onSellingUnits: 0,
            price: 600,
            icon: "🍇",
        },
        {
            id: 7,
            title: "Pera",
            description:
            "Peras dulces, jugosas y llenas de sabor, perfectas para postres y ensaladas.",
            units: 30,
            onSellingUnits: 0,
            price: 300,
            icon: "🍐",
        },
        {
            id: 8,
            title: "Piña",
            description:
            "Piñas tropicales, deliciosas y refrescantes, ideales para jugos y postres.",
            units: 5,
            onSellingUnits: 0,
            price: 700,
            icon: "🍍",
        },
        {
            id: 9,
            title: "Sandía",
            description:
            "Sandías refrescantes, perfectas para los días calurosos y como snack saludable.",
            units: 0,
            onSellingUnits: 0,
            price: 800,
            icon: "🍉",
        },
        {
            id: 10,
            title: "Melón",
            description:
            "Melones dulces, jugosos y llenos de sabor, ideales para ensaladas y postres.",
            units: 12,
            onSellingUnits: 0,
            price: 400,
            icon: "🍈",
        },
        ]);

        const addProduct = (id) => {
        setProducts((prevProducts) => {
            return prevProducts.map((product) => {
            if (product.id === id && product.units > 0) {
                return {
                ...product,
                units: product.units - 1,
                onSellingUnits: product.onSellingUnits + 1,
                };
            }
            return product;
            });
        });
        };

        const removeProduct = (id) => {
        setProducts((prevProducts) => {
            return prevProducts.map((product) => {
            if (product.id === id && product.onSellingUnits > 0) {
                return {
                ...product,
                units: product.units + 1,
                onSellingUnits: product.onSellingUnits - 1,
                };
            }
            return product;
            });
        });
        };

        return (
        <div>
            <Header></Header>
            <div className="product-container">
            {products.map((product) => (
                <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                units={product.units}
                icon={product.icon}
                addProduct={addProduct}
                removeProduct={removeProduct}
                onSellingUnits={product.onSellingUnits}
                key={product.id}
                />
            ))}
            </div>
            <ShoppingCart products={products}></ShoppingCart>
        </div>
        );
    }

export default SellModule