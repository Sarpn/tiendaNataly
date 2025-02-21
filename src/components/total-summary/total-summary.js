import React from "react";
import { useNavigate } from "react-router-dom";

const TotalSummary = ({ products }) => {

    let navigate = useNavigate();

    let object = { state : {  products }};

    const redirectTo = ((page, obj) => {
        navigate(page, obj);
    });

    let total = 0;
    
    products.forEach(product => {
        total =  total + (product.price * product.onSellingUnits);
    });

    return <div>
        <h1>Total</h1>
        <p>{total}</p>
        <button onClick={() => redirectTo("/sell-summary", object)}>Finalizar compra</button>
    </div>
}

export default TotalSummary;
