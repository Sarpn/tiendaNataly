import React from "react";

const TotalSummary = ({ products }) => {

    let total = 0;
    
    products.forEach(product => {
        total =  total + (product.price * product.onSellingUnits);
    });

    return <div>
        <h1>Total</h1>
        <p>{total}</p>
    </div>
}

export default TotalSummary;
